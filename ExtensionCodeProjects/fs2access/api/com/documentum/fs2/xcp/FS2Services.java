package com.documentum.fs2.xcp;

import java.io.IOException;
import java.net.MalformedURLException;
import java.rmi.AccessException;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.util.List;

import xtrim.data.DataException;

import com.documentum.fc.client.search.DfSearchException;
import com.documentum.fc.client.search.impl.ecis.ECISProxyException;
import com.documentum.fc.common.DfException;

/**
 * Disclaimer: EMC grants you a non-exclusive copyright license to use all programming code examples from which you can
 * generate similar function tailored to your own specific needs. All sample code is provided for illustrative purposes
 * only. These examples have not been thoroughly tested under all conditions. EMC, therefore, cannot guarantee or imply
 * reliability, serviceability, or function of these programs. All programs contained herein are provided to you "AS IS"
 * without any warranties of any kind. The implied warranties of non-infringement, merchantability and fitness for a
 * particular purpose are expressly disclaimed.
 */
public interface FS2Services {

   /**
    * List all the sources available on the FS2 server. The FS2 server used is defined in dfc.properties.
    * 
    * @return The list of external sources names.
    */
   List<String> listExternalSources() throws AccessException, RemoteException, MalformedURLException, DataException,
         NotBoundException, ECISProxyException;

   /**
    * Return the list of query attributes of the source. Query attribute are the attributes of the source supporting
    * constraints.
    * 
    * @param sourceName
    *           the name of the source.
    * @return the list of query attributes.
    */
   List<String> listQueryAttributes(String sourceName) throws AccessException, RemoteException, MalformedURLException,
         DataException, NotBoundException, ECISProxyException, DfSearchException;

   /**
    * Return the list of result attributes of the source.
    * 
    * @param sourceName
    *           name of the source.
    * @return the list of attributes returned by the source.
    */
   List<String> listResultAttributes(String sourceName) throws DfSearchException, AccessException, RemoteException,
         MalformedURLException, DataException, NotBoundException, ECISProxyException;

   /**
    * Return the description of the source provided by the FS2 server.
    * 
    * @param sourceName
    *           name of the source where to retrieve the description.
    */
   String getSourceDescription(String sourceName) throws AccessException, RemoteException, MalformedURLException,
         DataException, NotBoundException, ECISProxyException, DfSearchException;

   /**
    * Execute the query on the query attribute of the source and return the list of values for the result attribute.
    */
   List<String> searchSource(String sourceName, String queryAttribute, String resultAttribute, String query)
         throws DfException, InterruptedException, IOException;

   /**
    * Search on the FFIEC adapter and return a list of results. Each result is composed of the concatenation of the
    * attributes object_name, record-id, fdic_cert, state and city returned by the adapter all separated by the
    * character ';'.
    * 
    * Example: {"AMERIFIRST BANK;139133;2838;AL;UNION SPRINGS","CHEAHA BANK;2915126;35514;AL;OXFORD"}
    */
   List<String> searchFFIECAdapter() throws DfException, InterruptedException, IOException;

   /**
    * Search on the FFIEC adapter and return a list of results. Each result is composed of the concatenation of the
    * attributes object_name, record-id, fdic_cert, state and city returned by the adapter all separated by the
    * character ';'.
    * 
    * Example: {"AMERIFIRST BANK;139133;2838;AL;UNION SPRINGS","CHEAHA BANK;2915126;35514;AL;OXFORD"}
    * 
    * Only the banks in the given state are returned.
    * 
    * @param state
    *           the state of the banks to return.
    */
   List<String> searchFFIECAdapter(String state) throws DfException, InterruptedException, IOException;

   /**
    * This method searches on FS2 the bank defined by the bankID then get a report using FS2 embedded content feature.
    * The report is then imported in the content object defined by the contentObjId.
    * 
    * @param contentObjectId
    *           id of the content object where to import the report.
    * @param bankID
    *           id of the bank to import.
    */
   void importBankReport(String contentObjectId, String bankID) throws DfException, InterruptedException, IOException;

   /**
    * Import all the results found on specified sources for the given query where the score is at least equal to
    * minScore. Documents will imported on documentType in folder parentFolder.
    * 
    * @param sources
    *           list of sources where to run the query.
    * @param query
    *           the query to search on specified sources.
    * @param minScore
    *           only results with score greater or equal to this value will be imported.
    * @param documentType
    *           base type where to import the content.
    * @param parentFolder
    *           parent folder where to import the document.
    * @return the list of id of imported documents.
    */
   List<String> importExternalResults(List<String> sources, String query, double minScore, String documentType,
         String parentFolder) throws DfException, InterruptedException, IOException;

   /**
    * Extract a specific attribute from the results returned by the {@link #searchFFIECAdapter()} method.
    * <p>
    * 
    * <pre>
    * Example with the following list: {"AMERIFIRST BANK;139133;2838;AL;UNION SPRINGS","CHEAHA BANK;2915126;35514;AL;OXFORD"}
    * A call on attribute "object_name" returns the list:{"AMERIFIRST BANK","CHEAHA BANK"}.
    * And a call on attribute "city" returns the list: {UNION SPRINGS","OXFORD"}.
    * </pre>
    * 
    * </p>
    * 
    * @param results
    *           List of all concatenated attribute returned by {@link #searchFFIECAdapter()} method.
    * @param attribute
    *           The attribute to extract from the list
    * @return
    */
   List<String> extractAttributeValueList(List<String> results, String attribute);

   /**
    * Extract a specific attribute from a result entry value returned by the {@link #searchFFIECAdapter()} method.
    * 
    * @param result
    *           result entry returned by {@link #searchFFIECAdapter()}
    * @param attribute
    *           the attribute value to extract in the list (can be one in object_name, record-id, fdic_cert, state,
    *           city)
    * @return
    */
   String extractAttributeValue(String result, String attribute);

   /**
    * Generate a list of unique ids from a list of results.
    */
   List<String> generateIDs(List<String> results);
}
