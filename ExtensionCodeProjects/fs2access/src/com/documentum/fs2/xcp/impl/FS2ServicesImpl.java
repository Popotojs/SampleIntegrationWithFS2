package com.documentum.fs2.xcp.impl;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.rmi.AccessException;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.List;

import xtrim.data.DataException;
import xtrim.data.Domain;

import com.documentum.fc.client.DfAuthenticationException;
import com.documentum.fc.client.DfClient;
import com.documentum.fc.client.DfIdentityException;
import com.documentum.fc.client.DfPrincipalException;
import com.documentum.fc.client.DfServiceException;
import com.documentum.fc.client.DfSingleDocbaseModule;
import com.documentum.fc.client.IDfSysObject;
import com.documentum.fc.client.search.DfSearchException;
import com.documentum.fc.client.search.IDfExpressionSet;
import com.documentum.fc.client.search.IDfQueryBuilder;
import com.documentum.fc.client.search.IDfQueryDefinition;
import com.documentum.fc.client.search.IDfQueryProcessor;
import com.documentum.fc.client.search.IDfResultContent;
import com.documentum.fc.client.search.IDfResultEntry;
import com.documentum.fc.client.search.IDfResultObjectManager;
import com.documentum.fc.client.search.IDfResultsSet;
import com.documentum.fc.client.search.IDfSearchOperation;
import com.documentum.fc.client.search.IDfSearchService;
import com.documentum.fc.client.search.impl.ecis.ECISAttributesMapping;
import com.documentum.fc.client.search.impl.ecis.ECISProxy;
import com.documentum.fc.client.search.impl.ecis.ECISProxyException;
import com.documentum.fc.client.search.impl.ecis.RemoteECISMetadataMgrImpl;
import com.documentum.fc.common.DfException;
import com.documentum.fc.common.DfId;
import com.documentum.fc.common.IDfValue;
import com.documentum.fs2.xcp.FS2Services;

/**
 * Disclaimer: EMC grants you a non-exclusive copyright license to use all programming code examples from which you can
 * generate similar function tailored to your own specific needs. All sample code is provided for illustrative purposes
 * only. These examples have not been thoroughly tested under all conditions. EMC, therefore, cannot guarantee or imply
 * reliability, serviceability, or function of these programs. All programs contained herein are provided to you "AS IS"
 * without any warranties of any kind. The implied warranties of non-infringement, merchantability and fitness for a
 * particular purpose are expressly disclaimed.
 */
public class FS2ServicesImpl extends DfSingleDocbaseModule implements FS2Services {
   public static final String STR_VERSION = "1.0";

   private static final String FFIEC_SOURCE = "contentproviders/FFIEC";
   // FFIEC source attributes
   private static final String CITY = "city";
   private static final String FDIC_CERT = "fdic_cert";
   private static final String OBJECT_NAME = "object_name";
   private static final String RECORD_ID = "record-id";
   private static final String STATE = "state";

   private static final int SEARCH_TIMEOUT_MS = 500000;
   private static final String SOURCE_BASE_TYPE = "dm_document";
   private static final String ATTRIBUTE_SEPARATOR = ";";
   private static final String STR_VENDOR_STRING = "xcP 2.0 examples, 2012";
   
   @Override
   public List<String> listExternalSources() throws AccessException, RemoteException, MalformedURLException,
         DataException, NotBoundException, ECISProxyException {
      List<String> sources = new ArrayList<String>();
      Domain jspDomain = ECISProxy.getECISProxy().getJspDomain();
      RemoteECISMetadataMgrImpl ecisMetadataMgr = new RemoteECISMetadataMgrImpl(jspDomain);

      Iterator<?> sourceIterator = ecisMetadataMgr.getSourcesNames();
      while (sourceIterator.hasNext()) {
         String source = (String) sourceIterator.next();
         sources.add(source);
      }

      return sources;
   }

   @Override
   public List<String> listQueryAttributes(String sourceName) throws AccessException, RemoteException,
         MalformedURLException, DataException, NotBoundException, ECISProxyException, DfSearchException {
      List<String> attributes = new ArrayList<String>();
      Domain jspDomain = ECISProxy.getECISProxy().getJspDomain();
      RemoteECISMetadataMgrImpl ecisMetadataMgr = new RemoteECISMetadataMgrImpl(jspDomain);
      Enumeration<String> attributesEnumeration = ecisMetadataMgr.getQueryAttributes(sourceName);

      while (attributesEnumeration.hasMoreElements()) {
         String fs2Attribute = attributesEnumeration.nextElement();

         // The attribute names are mapped to DFC attributes before being returned.
         String DFCAttribute = ECISAttributesMapping.ecisToDfc(fs2Attribute);
         attributes.add(DFCAttribute);
      }

      return attributes;
   }

   @Override
   public List<String> listResultAttributes(String sourceName) throws DfSearchException, AccessException,
         RemoteException, MalformedURLException, DataException, NotBoundException, ECISProxyException {
      List<String> attributes = new ArrayList<String>();
      Domain jspDomain = ECISProxy.getECISProxy().getJspDomain();
      RemoteECISMetadataMgrImpl ecisMetadataMgr = new RemoteECISMetadataMgrImpl(jspDomain);
      Enumeration<String> attributesEnumeration = ecisMetadataMgr.getResultAttributes(sourceName);

      while (attributesEnumeration.hasMoreElements()) {
         String fs2Attribute = attributesEnumeration.nextElement();

         // The attribute names are mapped to DFC attributes before being returned.
         String DFCAttribute = ECISAttributesMapping.ecisToDfc(fs2Attribute);
         attributes.add(DFCAttribute);
      }

      return attributes;
   }

   @Override
   public String getSourceDescription(String sourceName) throws AccessException, RemoteException,
         MalformedURLException, DataException, NotBoundException, ECISProxyException, DfSearchException {
      Domain jspDomain = ECISProxy.getECISProxy().getJspDomain();
      RemoteECISMetadataMgrImpl ecisMetadataMgr = new RemoteECISMetadataMgrImpl(jspDomain);
      return ecisMetadataMgr.getDescription(sourceName);
   }

   @Override
   public List<String> searchSource(String sourceName, String queryAttribute, String resultAttribute, String query)
         throws DfException, InterruptedException, IOException {
      IDfSearchService searchService = createSearchService();

      IDfQueryBuilder queryBuilder = searchService.newQueryMgr().newQueryBuilder();
      queryBuilder.addSelectedSource(sourceName);

      queryBuilder.setObjectType(SOURCE_BASE_TYPE);
      IDfExpressionSet rootExpressionSet = queryBuilder.getRootExpressionSet();
      rootExpressionSet.addSimpleAttrExpression(queryAttribute, IDfValue.DF_STRING, IDfSearchOperation.SEARCH_OP_EQUAL,
            false, false, query);

      IDfResultsSet resultsSet = executeQuery(searchService, queryBuilder);

      List<String> results = new ArrayList<String>();
      while (resultsSet.next()) {
         IDfResultEntry resultEntry = resultsSet.getResult();
         String value = "";
         if(resultEntry.hasAttr(resultAttribute)){
            value = resultEntry.getString(resultAttribute);
         }
         results.add(value);
      }
      return results;
   }

   @Override
   public List<String> searchFFIECAdapter() throws DfException, InterruptedException, IOException {
      return searchFFIECAdapter(null);
   }

   @Override
   public List<String> searchFFIECAdapter(String state) throws DfException, InterruptedException, IOException {
      IDfSearchService searchService = createSearchService();

      IDfQueryDefinition queryDefinition = createFFIECQueryDefinition(searchService, state);

      IDfResultsSet resultsSet = executeQuery(searchService, queryDefinition);

      List<String> results = new ArrayList<String>();
      while (resultsSet.next()) {
         results.add(extractFFIECAttributes(resultsSet.getResult()));
      }
      return results;
   }

   private IDfSearchService createSearchService() throws DfException {
      return DfClient.getLocalClient().newSearchService(getSessionManager(), getDocbaseName());
   }

   /**
    * Create a query definition to search all banks on FFIEC source in DFC search service.
    */
   private IDfQueryDefinition createFFIECQueryDefinition(IDfSearchService searchService, String state)
         throws DfException {
      IDfQueryBuilder queryBuilder = searchService.newQueryMgr().newQueryBuilder();
      queryBuilder.addSelectedSource(FFIEC_SOURCE);

      queryBuilder.setObjectType(SOURCE_BASE_TYPE);
      IDfExpressionSet rootExpressionSet = queryBuilder.getRootExpressionSet();
      if (state != null) {
         rootExpressionSet.addSimpleAttrExpression(STATE, IDfValue.DF_STRING, IDfSearchOperation.SEARCH_OP_EQUAL,
               false, false, state);
      } else {
         // add a simple full text constraint to return all the banks.
         rootExpressionSet.addFullTextExpression("bank");
      }

      return queryBuilder;
   }

   /**
    * Execute a query in a blocking way and return the results once all available.
    */
   private IDfResultsSet executeQuery(IDfSearchService searchService, IDfQueryDefinition queryDefinition)
         throws DfSearchException, InterruptedException {
      IDfQueryProcessor processor = searchService.newQueryProcessor(queryDefinition, true);

      processor.blockingSearch(SEARCH_TIMEOUT_MS);

      return processor.getResults();
   }

   /**
    * Extract the attributes that would be returned by the FFIEC source from the result entry. All the attribute are
    * concatenated in single string example: "CHEAHA BANK;2915126;35514;AL;OXFORD"
    */
   private String extractFFIECAttributes(IDfResultEntry resultEntry) {
      StringBuilder resultBuilder = new StringBuilder();

      resultBuilder.append(resultEntry.getString(OBJECT_NAME));

      resultBuilder.append(ATTRIBUTE_SEPARATOR);
      resultBuilder.append(resultEntry.getString(RECORD_ID));

      resultBuilder.append(ATTRIBUTE_SEPARATOR);
      resultBuilder.append(resultEntry.getString(FDIC_CERT));

      resultBuilder.append(ATTRIBUTE_SEPARATOR);
      resultBuilder.append(resultEntry.getString(STATE));

      resultBuilder.append(ATTRIBUTE_SEPARATOR);
      resultBuilder.append(resultEntry.getString(CITY));

      return resultBuilder.toString();
   }

   @Override
   public void importBankReport(String contentObjectId, String bankId) throws DfException, InterruptedException,
         IOException {
      IDfSearchService searchService = createSearchService();

      IDfQueryDefinition queryDefinition = createFFIECQueryDefinition(searchService, null);

      IDfResultsSet resultsSet = executeQuery(searchService, queryDefinition);

      IDfResultEntry resultEntry = getBankResultEntry(bankId, resultsSet);

      if (resultEntry != null) { // bank found with id bankId
         importContent(resultEntry, contentObjectId, searchService.newResultObjectManager(queryDefinition));
      }
   }

   /**
    * Get the result entry corresponding to the bank with the given id.
    */
   private IDfResultEntry getBankResultEntry(String bankId, IDfResultsSet resultsSet) {
      while (resultsSet.next()) {
         IDfResultEntry resultEntry = resultsSet.getResult();
         if (bankId.equals(resultEntry.getString(RECORD_ID))) {
            return resultEntry;
         }
      }
      return null;
   }

   /**
    * Imports the content provided by FS2 for the resultEntry and store it in the repository in the object defined by
    * the contentObjectId.
    * 
    * @param resultEntry
    *           FS2 result from which the content will be extracted.
    * @param contentObjectId
    *           Id of the object in the repository where to import the content.
    * @param objectManager
    *           Manager used to extract the result content (can be created with the search service
    *           searchService.newResultObjectManager(queryDefinition))
    */
   private void importContent(IDfResultEntry resultEntry, String contentObjectId, IDfResultObjectManager objectManager)
         throws DfException, IOException, DfIdentityException, DfAuthenticationException, DfPrincipalException,
         DfServiceException {

      // get the content of the result entry and import it in the document
      IDfResultContent content = objectManager.getContent(resultEntry);

      if (content != null) {
         InputStream contentStream = null;
         ByteArrayOutputStream out = null;
         try {
            contentStream = content.getInputStream();
            byte[] buffer = new byte[2048];
            int nbBytes;
            out = new ByteArrayOutputStream();
            while ((nbBytes = contentStream.read(buffer)) >= 0) {
               out.write(buffer, 0, nbBytes);
            }

            IDfSysObject doc = (IDfSysObject) getSession().getObject(new DfId(contentObjectId));

            doc.setContentType(content.getType());
            doc.setContent(out);
            doc.save();
         } finally {
            if (out != null) {
               out.close();
            }
            if (contentStream != null) {
               contentStream.close();
            }
         }

      }
   }

   @Override
   public List<String> importExternalResults(List<String> sources, String query, double minScore, String documentType,
         String parentFolder) throws DfException, InterruptedException, IOException {

      IDfSearchService searchService = createSearchService();

      IDfQueryBuilder queryBuilder = searchService.newQueryMgr().newQueryBuilder();

      // Add all source in the query
      for (String source : sources) {
         queryBuilder.addSelectedSource(source);
      }

      queryBuilder.setObjectType(SOURCE_BASE_TYPE);

      // Add the full text query constraint
      IDfExpressionSet rootExpressionSet = queryBuilder.getRootExpressionSet();
      rootExpressionSet.addFullTextExpression(query);

      IDfResultsSet resultsSet = executeQuery(searchService, queryBuilder);
      List<String> results = new ArrayList<String>();

      importDocs(minScore, documentType, parentFolder, searchService, queryBuilder, resultsSet, results);

      return results;
   }

   /**
    * Imports all the results in the result set with score >= minScore.
    */
   private void importDocs(double minScore, String documentType, String parentFolder, IDfSearchService searchService,
         IDfQueryBuilder queryBuilder, IDfResultsSet resultsSet, List<String> results) throws DfException, IOException {

      IOException lastException = null;

      while (resultsSet.next()) {
         IDfResultEntry resultEntry = resultsSet.getResult();
         if (resultEntry.getScore() >= minScore) {
            try {
               String newDocId = importDoc(resultEntry, searchService, queryBuilder, documentType, parentFolder);
               if (newDocId != null) {
                  results.add(newDocId);
               }
            } catch (IOException e) {

               // Exception while trying to import a document.
               // We ignore it and move to next result
               lastException = e;
            }
         }
      }

      if (lastException != null) {
         throw lastException;
      }
   }

   /**
    * Import the content of the result entry in a new object of type documentType in the repository.
    */
   private String importDoc(IDfResultEntry resultEntry, IDfSearchService searchService, IDfQueryBuilder queryBuilder,
         String documentType, String parentFolder) throws DfException, IOException {
      IDfResultObjectManager objectManager = searchService.newResultObjectManager(queryBuilder);
      IDfResultContent content = objectManager.getContent(resultEntry);
      String newObjectId = null;
      String objectName = resultEntry.getString(OBJECT_NAME);

      if (content != null) {
         InputStream contentStream = null;
         ByteArrayOutputStream out = null;
         try {
            contentStream = content.getInputStream();
            byte[] buffer = new byte[2048];
            int nbBytes;
            out = new ByteArrayOutputStream();
            while ((nbBytes = contentStream.read(buffer)) >= 0) {
               out.write(buffer, 0, nbBytes);
            }

            IDfSysObject doc = (IDfSysObject) getSession().newObject(documentType);

            doc.setObjectName(objectName);
            doc.setContentType(content.getType());
            doc.setContent(out);

            // We keep the source in created object (only if the sysobject has a source attribute)
            if (doc.hasAttr("source") && resultEntry.hasAttr("r_source")) {
               doc.setString("source", resultEntry.getString("r_source"));
            }

            // We link the created object in the parent folder
            if (parentFolder != null) {
               doc.link(parentFolder);
            }

            doc.save();
            newObjectId = doc.getObjectId().getId();
         } finally {
            if (out != null) {
               out.close();
            }
            if (contentStream != null) {
               contentStream.close();
            }
         }

      }
      return newObjectId;
   }

   @Override
   public List<String> extractAttributeValueList(List<String> results, String attribute) {
      List<String> extractedAttributes = new ArrayList<String>();

      for (String result : results) {
         extractedAttributes.add(extractAttributeValue(result, attribute));
      }

      return extractedAttributes;
   }

   @Override
   public String extractAttributeValue(String result, String attribute) {
      String[] values = result.split(ATTRIBUTE_SEPARATOR);

      if (OBJECT_NAME.equalsIgnoreCase(attribute)) {
         if (values.length > 0) {
            return values[0];
         }
      } else if (RECORD_ID.equalsIgnoreCase(attribute)) {
         if (values.length > 1) {
            return values[1];
         }
      } else if (FDIC_CERT.equalsIgnoreCase(attribute)) {
         if (values.length > 2) {
            return values[2];
         }
      } else if (STATE.equalsIgnoreCase(attribute)) {
         if (values.length > 3) {
            return values[3];
         }
      } else if (CITY.equalsIgnoreCase(attribute)) {
         if (values.length > 4) {
            return values[4];
         }
      }
      return "";
   }

   public String getVendorString() {
      return STR_VENDOR_STRING;
   }

   public String getVersion() {
      return STR_VERSION;
   }

   @Override
   public List<String> generateIDs(List<String> results) {
      List<String> ids = new ArrayList<String>(results.size());

      int count = 0;
      for (String result : results) {
         ids.add(Integer.toString(count));
         count++;
      }

      return ids;
   }

}
