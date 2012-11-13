/*
 * Copyright (c) 2011. EMC Corporation. All Rights Reserved.
 */

// Expressions.js

Ext.namespace("xcp");

Ext.define("Expression.IdFromContext",
{
	alias : 'expression.id_from_context',

	statics : {
		evaluate : function () {
			return xcp.navigationManager.currentNavigationContext.objectId;
		}
	}

});

Ext.define("xcp.expression.Generated",{
extend:"xcp.core.expr.BaseExpression",
singleton:true});

xcp.expression.Generated.assign_task_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'xcp_assign_task','Inputs.id'); }

xcp.expression.Generated.assign_task_da_userName_1 = function (context) { return this.getValueFromWidget(context,'dropdown_list','value'); }

xcp.expression.Generated.attachment_sel_da_selection_1 = function (context) { return this.getValueFromSelectionModel(context,'results_list','id'); }

xcp.expression.Generated.bank_attachment_step_folderQuery_1_folder_id_1 = function (context) { return xcp.widget.ContentTree.getSelectedNodeId(context,'content_tree'); }

xcp.expression.Generated.bank_create_bank_button_disabled_1 = function (context) { return xcp.functions.length(xcp.util.mixin.DropdownMixin.getLabel(context,'name')) <= 0; }

xcp.expression.Generated.bank_create_bank_city_value_1 = function (context) { return this.getValueFromDataSourceActionModel(context,'extract_attribute_initiate_staless_ds_2','outputvalue'); }

xcp.expression.Generated.bank_create_bank_da_def_create_bank_city_1 = function (context) { return this.getValueFromWidget(context,'city','value'); }

xcp.expression.Generated.bank_create_bank_da_def_create_bank_fdic_certificate_1 = function (context) { return this.getValueFromWidget(context,'fdic_cert','value'); }

xcp.expression.Generated.bank_create_bank_da_def_create_bank_object_name_1 = function (context) { return xcp.util.mixin.DropdownMixin.getLabel(context,'name'); }

xcp.expression.Generated.bank_create_bank_da_def_create_bank_rssd_id_1 = function (context) { return this.getValueFromWidget(context,'rssd_id','value'); }

xcp.expression.Generated.bank_create_bank_da_def_create_bank_state_1 = function (context) { return this.getValueFromWidget(context,'state','value'); }

xcp.expression.Generated.bank_create_bank_extract_attribute_initiate_staless_ds_1_attribute_1 = function (context) { return 'fdic_cert'; }

xcp.expression.Generated.bank_create_bank_extract_attribute_initiate_staless_ds_1_inputvalue_1 = function (context) { return this.getValueFromWidget(context,'name','value'); }

xcp.expression.Generated.bank_create_bank_extract_attribute_initiate_staless_ds_2_attribute_1 = function (context) { return 'city'; }

xcp.expression.Generated.bank_create_bank_extract_attribute_initiate_staless_ds_2_inputvalue_1 = function (context) { return this.getValueFromWidget(context,'name','value'); }

xcp.expression.Generated.bank_create_bank_extract_attribute_initiate_staless_ds_3_attribute_1 = function (context) { return 'state'; }

xcp.expression.Generated.bank_create_bank_extract_attribute_initiate_staless_ds_3_inputvalue_1 = function (context) { return this.getValueFromWidget(context,'name','value'); }

xcp.expression.Generated.bank_create_bank_extract_attribute_initiate_staless_ds_attribute_1 = function (context) { return 'record-id'; }

xcp.expression.Generated.bank_create_bank_extract_attribute_initiate_staless_ds_inputvalue_1 = function (context) { return this.getValueFromWidget(context,'name','value'); }

xcp.expression.Generated.bank_create_bank_fdic_cert_value_1 = function (context) { return this.getValueFromDataSourceActionModel(context,'extract_attribute_initiate_staless_ds_1','outputvalue'); }

xcp.expression.Generated.bank_create_bank_list_banks_in_state_initiate_staless_ds_state_1 = function (context) { return this.getValueFromWidget(context,'state_ddl','value'); }

xcp.expression.Generated.bank_create_bank_name_disabled_1 = function (context) { return xcp.functions.length(this.getValueFromWidget(context,'state_ddl','value')) <= 0; }

xcp.expression.Generated.bank_create_bank_rssd_id_value_1 = function (context) { return this.getValueFromDataSourceActionModel(context,'extract_attribute_initiate_staless_ds','outputvalue'); }

xcp.expression.Generated.bank_create_bank_state_value_1 = function (context) { return this.getValueFromDataSourceActionModel(context,'extract_attribute_initiate_staless_ds_3','outputvalue'); }

xcp.expression.Generated.bank_create_bank_value_display_value_1 = function (context) { return 'Banks information is retrieved from <a href="http://www.ffiec.gov/">Federal Financial Institutions Examination Council\'s</a> web service.'; }

xcp.expression.Generated.bank_edit_base_content_comments_objectId_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.bank_edit_base_content_da_def_update_dm_document_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.bank_edit_base_content_da_def_update_dm_document_object_name_1 = function (context) { return this.getValueFromWidget(context,'object_name','value'); }

xcp.expression.Generated.bank_edit_base_content_r_lock_owner_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')) == 0; }

xcp.expression.Generated.bank_edit_base_content_r_lock_owner_value_1 = function (context) { return xcp.functions.lockStatus(this.getValueFromModel(context,'xcp_dm_document','r_lock_date'), this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')); }

xcp.expression.Generated.bank_edit_base_content_viewer_contentType_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','a_content_type'); }

xcp.expression.Generated.bank_edit_base_content_viewer_objectId_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.bank_edit_base_folder_da_def_update_dm_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.bank_edit_base_folder_da_def_update_dm_folder_object_name_1 = function (context) { return this.getValueFromWidget(context,'object_name','value'); }

xcp.expression.Generated.bank_forward_activity_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.bank_forward_activity_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'INPUT'; }

xcp.expression.Generated.bank_forward_activity_multi_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.bank_forward_activity_multi_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'INPUT'; }

xcp.expression.Generated.bank_google_search_google_search_initiate_staless_ds_query_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.bank_google_search_no_su_google_search_initiate_staless_ds_query_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.bank_google_search_no_su_results_list_column2_dataIndex_1 = function (context) { return '<a href="' + this.getValueFromModel(context,'fs2_google_search_initiate_staless_ds_outputs','url') + '">' + this.getValueFromModel(context,'fs2_google_search_initiate_staless_ds_outputs','url') + '</a>'; }

xcp.expression.Generated.bank_google_search_no_su_results_list_column_dataIndex_1 = function (context) { return '<a href="' + this.getValueFromModel(context,'fs2_google_search_initiate_staless_ds_outputs','site') + '">' + this.getValueFromModel(context,'fs2_google_search_initiate_staless_ds_outputs','site') + '</a>'; }

xcp.expression.Generated.bank_google_search_no_su_results_list_page_link_column1_dataIndex_1 = function (context) { return '<a href="' + this.getValueFromModel(context,'fs2_google_search_initiate_staless_ds_outputs','url') + '"> External result </a>'; }

xcp.expression.Generated.bank_google_search_no_su_results_list_page_link_column_dataIndex_1 = function (context) { return '<a href="' + this.getValueFromModel(context,'fs2_google_search_initiate_staless_ds_outputs','url') + '">' + this.getValueFromModel(context,'fs2_google_search_initiate_staless_ds_outputs','object_name') + '</a>'; }

xcp.expression.Generated.bank_google_search_results_list_column2_dataIndex_1 = function (context) { return '<a href="' + this.getValueFromModel(context,'fs2_google_search_initiate_staless_ds_outputs','url') + '">' + this.getValueFromModel(context,'fs2_google_search_initiate_staless_ds_outputs','url') + '</a>'; }

xcp.expression.Generated.bank_google_search_results_list_column_dataIndex_1 = function (context) { return '<a href="' + this.getValueFromModel(context,'fs2_google_search_initiate_staless_ds_outputs','site') + '">' + this.getValueFromModel(context,'fs2_google_search_initiate_staless_ds_outputs','site') + '</a>'; }

xcp.expression.Generated.bank_google_search_results_list_page_link_column1_dataIndex_1 = function (context) { return '<a href="' + this.getValueFromModel(context,'fs2_google_search_initiate_staless_ds_outputs','url') + '"> External result </a>'; }

xcp.expression.Generated.bank_google_search_results_list_page_link_column_dataIndex_1 = function (context) { return '<a href="' + this.getValueFromModel(context,'fs2_google_search_initiate_staless_ds_outputs','url') + '">' + this.getValueFromModel(context,'fs2_google_search_initiate_staless_ds_outputs','object_name') + '</a>'; }

xcp.expression.Generated.bank_reject_activity_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.bank_reject_activity_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'REVERT'; }

xcp.expression.Generated.bank_reject_activity_multi_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.bank_reject_activity_multi_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'REVERT'; }

xcp.expression.Generated.bank_search_for_bank_fol_search_for_bank_fol_input_name_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.bank_search_for_bank_rep_search_for_bank_rep_input_name_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.bank_search_for_banks_ft_search_for_banks_ft_input_fdic_certificate_1 = function (context) { return this.getValueFromWidget(context,'text_input3','value'); }

xcp.expression.Generated.bank_search_for_banks_ft_search_for_banks_ft_input_name_1 = function (context) { return this.getValueFromWidget(context,'text_input1','value'); }

xcp.expression.Generated.bank_search_for_banks_ft_search_for_banks_ft_input_rssd_id_1 = function (context) { return this.getValueFromWidget(context,'text_input2','value'); }

xcp.expression.Generated.bank_search_for_banks_ft_search_for_banks_ft_q_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.bank_search_for_banks_search_for_banks_input_name_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.bank_search_for_banks_search_for_banks_input_rssd_id_1 = function (context) { return this.getValueFromWidget(context,'text_input1','value'); }

xcp.expression.Generated.bank_search_for_banks_search_for_banks_input_state_1 = function (context) { return this.getValueFromWidget(context,'text_input2','value'); }

xcp.expression.Generated.bank_search_for_extern_1_search_for_extern_1_input_name_1 = function (context) { return this.getValueFromWidget(context,'text_input1','value'); }

xcp.expression.Generated.bank_search_for_extern_1_search_for_extern_1_input_source_1 = function (context) { return this.getValueFromWidget(context,'text_input2','value'); }

xcp.expression.Generated.bank_search_for_extern_1_search_for_extern_1_q_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.bank_search_for_external_search_for_external_input_name_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.bank_search_for_external_search_for_external_input_source_1 = function (context) { return this.getValueFromWidget(context,'text_input1','value'); }

xcp.expression.Generated.bank_selector_content_st_content_rt_query_input_contenttype_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('contenttype'); }

xcp.expression.Generated.bank_selector_content_st_content_rt_query_input_name_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.bank_selector_folder_ste_folder_rt_query_1_input_folder_id_1 = function (context) { return this.getValueFromWidget(context,'text_input','value'); }

xcp.expression.Generated.bank_signoff_forward_multi_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.bank_signoff_forward_multi_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'INPUT'; }

xcp.expression.Generated.bank_signoff_forward_one_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.bank_signoff_forward_one_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'INPUT'; }

xcp.expression.Generated.bank_signoff_reject_multi_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.bank_signoff_reject_multi_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'REVERT'; }

xcp.expression.Generated.bank_signoff_reject_one_activity_list_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.bank_signoff_reject_one_activity_list_initiate_staless_ds_1_port_type_1 = function (context) { return 'REVERT'; }

xcp.expression.Generated.bank_status_page_get_source_descript_initiate_staless_ds_source_1 = function (context) { return this.getValueFromWidget(context,'source','value'); }

xcp.expression.Generated.bank_status_page_list_query_attribut_initiate_staless_ds_source_1 = function (context) { return this.getValueFromWidget(context,'source','value'); }

xcp.expression.Generated.bank_status_page_list_result_attribu_initiate_staless_ds_source_1 = function (context) { return this.getValueFromWidget(context,'source','value'); }

xcp.expression.Generated.bank_status_page_search_external_sou_initiate_staless_ds_query_1 = function (context) { return this.getValueFromWidget(context,'query','value'); }

xcp.expression.Generated.bank_status_page_search_external_sou_initiate_staless_ds_queryattr_1 = function (context) { return this.getValueFromWidget(context,'query_attr','value'); }

xcp.expression.Generated.bank_status_page_search_external_sou_initiate_staless_ds_resultattr_1 = function (context) { return this.getValueFromWidget(context,'result_attr','value'); }

xcp.expression.Generated.bank_status_page_search_external_sou_initiate_staless_ds_sourcename_1 = function (context) { return this.getValueFromWidget(context,'source','value'); }

xcp.expression.Generated.bank_user_from_queue_user_from_queue_initiate_staless_ds_1_id_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }

xcp.expression.Generated.bank_user_preferences_column_box3_hidden_1 = function (context) { return this.getValueFromWidget(context,'delegate_task','value') != true; }

xcp.expression.Generated.bank_user_preferences_delegateToUser_disabled_1 = function (context) { return this.getValueFromWidget(context,'delegate_task','value') != true; }

xcp.expression.Generated.bank_user_preferences_delegateToUser_hidden_1 = function (context) { return this.getValueFromWidget(context,'delegate_task','value') != true; }

xcp.expression.Generated.bank_view_bank_folder_da_def_delete_dm_folder_id_1 = function (context) { return this.getValueFromModel(context,'bank_bank_folder','id'); }

xcp.expression.Generated.bank_view_bank_folder_folderQuery_folder_id_1 = function (context) { return this.getValueFromModel(context,'bank_bank_folder','id'); }

xcp.expression.Generated.bank_view_bank_folder_view_root_1 = function (context) { return this.getValueFromModel(context,'bank_bank','content_folder'); }

xcp.expression.Generated.bank_view_bank_report_comments_objectId_1 = function (context) { return this.getValueFromModel(context,'bank_bank_report','id'); }

xcp.expression.Generated.bank_view_bank_report_da_def_delete_bank_report_1_id_1 = function (context) { return this.getValueFromModel(context,'bank_bank_report','id'); }

xcp.expression.Generated.bank_view_bank_report_r_lock_owner_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromModel(context,'bank_bank_report','r_lock_owner')) == 0; }

xcp.expression.Generated.bank_view_bank_report_r_lock_owner_value_1 = function (context) { return xcp.functions.lockStatus(this.getValueFromModel(context,'bank_bank_report','r_lock_date'), this.getValueFromModel(context,'bank_bank_report','r_lock_owner')); }

xcp.expression.Generated.bank_view_bank_report_viewer_contentType_1 = function (context) { return this.getValueFromModel(context,'bank_bank_report','a_content_type'); }

xcp.expression.Generated.bank_view_bank_report_viewer_objectId_1 = function (context) { return this.getValueFromModel(context,'bank_bank_report','id'); }

xcp.expression.Generated.bank_view_base_content_comments_objectId_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.bank_view_base_content_da_def_delete_dm_document_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.bank_view_base_content_r_lock_owner_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')) == 0; }

xcp.expression.Generated.bank_view_base_content_r_lock_owner_value_1 = function (context) { return xcp.functions.lockStatus(this.getValueFromModel(context,'xcp_dm_document','r_lock_date'), this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')); }

xcp.expression.Generated.bank_view_base_content_viewer_contentType_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','a_content_type'); }

xcp.expression.Generated.bank_view_base_content_viewer_objectId_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }

xcp.expression.Generated.bank_view_base_folder_da_def_delete_dm_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.bank_view_base_folder_folderQuery_folder_id_1 = function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }

xcp.expression.Generated.bank_view_external_conte_comments_objectId_1 = function (context) { return this.getValueFromModel(context,'bank_external_content','id'); }

xcp.expression.Generated.bank_view_external_conte_da_def_delete_external_content_1_id_1 = function (context) { return this.getValueFromModel(context,'bank_external_content','id'); }

xcp.expression.Generated.bank_view_external_conte_r_lock_owner_hidden_1 = function (context) { return xcp.functions.length(this.getValueFromModel(context,'bank_external_content','r_lock_owner')) == 0; }

xcp.expression.Generated.bank_view_external_conte_r_lock_owner_value_1 = function (context) { return xcp.functions.lockStatus(this.getValueFromModel(context,'bank_external_content','r_lock_date'), this.getValueFromModel(context,'bank_external_content','r_lock_owner')); }

xcp.expression.Generated.bank_view_external_conte_viewer_contentType_1 = function (context) { return this.getValueFromModel(context,'bank_external_content','a_content_type'); }

xcp.expression.Generated.bank_view_external_conte_viewer_objectId_1 = function (context) { return this.getValueFromModel(context,'bank_external_content','id'); }

xcp.expression.Generated.changeworkqueue_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'xcp_changeworkqueue','Inputs.id'); }

xcp.expression.Generated.changeworkqueue_da_queueName_1 = function (context) { return this.getValueFromWidget(context,'queue_dropdown_list','value'); }

xcp.expression.Generated.fs2_status_page_description_value_1 = function (context) { return this.getValueFromDataSourceActionModel(context,'get_source_descript_initiate_staless_ds','description'); }

xcp.expression.Generated.hold_task_da_holdUntil_1 = function (context) { return this.getValueFromWidget(context,'hold_until','value'); }

xcp.expression.Generated.hold_task_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'xcp_hold_task','Inputs.id'); }

xcp.expression.Generated.reassign_task_da_id_1 = function (context) { return this.getValueFromActionFlowInputModel(context,'xcp_reassign_task','Inputs.id'); }

xcp.expression.Generated.reassign_task_da_userName_1 = function (context) { return this.getValueFromWidget(context,'dropdown_list','value'); }

xcp.expression.Generated.selector_content_da_selection_1 = function (context) { return this.getValueFromSelectionModel(context,'results_list','id'); }

xcp.expression.Generated.selector_folder_da_selection_1 = function (context) { return this.getValueFromSelectionModel(context,'results_list','id'); }

xcp.expression.Generated.update_preferences_update_delegateToUser = function (context) { return this.getValueFromWidget(context,'delegateToUser','value'); }

xcp.expression.Generated.update_preferences_update_delegate_task = function (context) { return this.getValueFromWidget(context,'delegate_task','value'); }

xcp.expression.Generated.update_preferences_update_networkLocation = function (context) { return this.getValueFromWidget(context,'networkLocation','value'); }

xcp.expression.Generated.update_preferences_update_role = function (context) { return this.getValueFromWidget(context,'role','value'); }

xcp.expression.Generated.update_preferences_update_workflowAutoNextTask = function (context) { return this.getValueFromWidget(context,'workflowAutoNextTask','value'); }

xcp.expression.Generated.xcp_attachment_step_content_tree_folderRoot_1 = function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('folderRoot'); }

xcp.expression.Generated.xcp_hold_task_hold_until_value_1 = function (context) { return xcp.functions.addDays(xcp.functions.today(), 1); }

