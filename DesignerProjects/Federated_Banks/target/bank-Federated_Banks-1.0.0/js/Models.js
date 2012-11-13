
Ext.define("bank_bank",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/bank_banks"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "content_folder",
        "type" : "string"
      }, {
        "name" : "fdic_certificate",
        "type" : "string"
      }, {
        "name" : "rssd_id",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("bank_bank_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/bank_banks/template"
      },
      "fields" : [ {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "content_folder",
        "type" : "string"
      }, {
        "name" : "fdic_certificate",
        "type" : "string"
      }, {
        "name" : "rssd_id",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_RootBO",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_RootBO_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs/template"
      },
      "fields" : [ {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("bank_bank_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/bank_bank_folders"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_folderlist_0",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest_folder",
        "url" : "application/xcp_dm_folders"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, {
        "name" : "icon",
        "type" : "string"
      }, "links" ]
    }
);

Ext.define("bank_external_content",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/bank_external_contents"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "source",
        "type" : "string"
      }, {
        "name" : "owner_name",
        "type" : "string"
      }, {
        "name" : "a_status",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "owner_name",
        "type" : "string"
      }, {
        "name" : "a_status",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("bank_bank_report",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/bank_bank_reports"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "owner_name",
        "type" : "string"
      }, {
        "name" : "a_status",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_currenttask",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "act_name",
        "type" : "string"
      }, {
        "name" : "qitem_id",
        "type" : "string"
      }, {
        "name" : "creation_date",
        "type" : "string"
      }, {
        "name" : "due_date",
        "type" : "string"
      }, {
        "name" : "performer",
        "type" : "string"
      }, {
        "name" : "performer_address",
        "type" : "string"
      }, {
        "name" : "priority",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "state",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "task_subject",
        "type" : "string"
      }, {
        "name" : "queue_name",
        "type" : "string"
      }, {
        "name" : "instructions",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "received_date",
        "type" : "string"
      }, {
        "name" : "received_from",
        "type" : "string"
      }, {
        "name" : "requirements",
        "type" : "string"
      }, {
        "name" : "isdelegable",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "isrepeatable",
        "useNull" : true,
        "type" : "boolean"
      } ]
    }
);

Ext.define("xcp_taskworkflow",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "correlation_identifier",
        "type" : "string"
      }, {
        "name" : "process_id",
        "type" : "string"
      }, {
        "name" : "r_creater_name",
        "type" : "string"
      }, {
        "name" : "r_start_date",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_runtime_state",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "supervisor_name",
        "type" : "string"
      }, {
        "name" : "supervisor_address",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ExecutionData",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "currenttask",
        "type" : "xcp_currenttask"
      }, {
        "name" : "taskworkflow",
        "type" : "xcp_taskworkflow"
      } ]
    }
);

Ext.define("fs2_list_result_attribu_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "resultattributes",
        "type" : "array"
      }, {
        "name" : "source",
        "type" : "string"
      } ]
    }
);

Ext.define("fs2_list_result_attribu_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_list_result_attribu_initiate_processVariables"
      } ]
    }
);

Ext.define("fs2_list_banks_ffiec_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "displayattribute",
        "type" : "string"
      }, {
        "name" : "displays",
        "type" : "array"
      }, {
        "name" : "values",
        "type" : "array"
      } ]
    }
);

Ext.define("fs2_list_banks_ffiec_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
            "displayattribute" : "object_name"
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_list_banks_ffiec_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "queue_name",
        "type" : "string"
      }, {
        "name" : "user_list",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_user_from_queue_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "activity_name",
        "type" : "array"
      }, {
        "name" : "date",
        "type" : "array"
      }, {
        "name" : "performer",
        "type" : "array"
      }, {
        "name" : "process_instance_id",
        "type" : "string"
      }, {
        "name" : "status",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_taskhistory_initiate_processVariables"
      } ]
    }
);

Ext.define("fs2_get_source_descript_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "source",
        "type" : "string"
      } ]
    }
);

Ext.define("fs2_get_source_descript_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_get_source_descript_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "user_group_name",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_userorgroup_selecti_processVariables"
      } ]
    }
);

Ext.define("fs2_list_query_attribut_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "queryattributes",
        "type" : "array"
      }, {
        "name" : "source",
        "type" : "string"
      } ]
    }
);

Ext.define("fs2_list_query_attribut_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_list_query_attribut_initiate_processVariables"
      } ]
    }
);

Ext.define("fs2_list_banks_in_state_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "displayattribute",
        "type" : "string"
      }, {
        "name" : "displays",
        "type" : "array"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "values",
        "type" : "array"
      } ]
    }
);

Ext.define("fs2_list_banks_in_state_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
            "displayattribute" : "object_name"
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_list_banks_in_state_initiate_processVariables"
      } ]
    }
);

Ext.define("fs2_search_external_sou_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "id",
        "type" : "array"
      }, {
        "name" : "query",
        "type" : "string"
      }, {
        "name" : "queryattr",
        "type" : "string"
      }, {
        "name" : "resultattr",
        "type" : "string"
      }, {
        "name" : "results",
        "type" : "array"
      }, {
        "name" : "sourcename",
        "type" : "string"
      } ]
    }
);

Ext.define("fs2_search_external_sou_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_search_external_sou_initiate_processVariables"
      } ]
    }
);

Ext.define("fs2_list_external_sourc_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "sources",
        "type" : "array"
      } ]
    }
);

Ext.define("fs2_list_external_sourc_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_list_external_sourc_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "queuelist",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_queue_list_initiate_processVariables"
      } ]
    }
);

Ext.define("fs2_extract_attribute_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "attribute",
        "type" : "string"
      }, {
        "name" : "inputvalue",
        "type" : "string"
      }, {
        "name" : "outputvalue",
        "type" : "string"
      } ]
    }
);

Ext.define("fs2_extract_attribute_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_extract_attribute_initiate_processVariables"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "act_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "output_activity_names",
        "type" : "array"
      }, {
        "name" : "port_type",
        "type" : "string"
      }, {
        "name" : "process_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_activity_list_initiate_processVariables"
      } ]
    }
);

Ext.define("bank_create_bank_process_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "externalobjectids",
        "type" : "array"
      }, {
        "name" : "externaltypename",
        "type" : "string"
      }, {
        "name" : "minscore",
        "useNull" : true,
        "type" : "float"
      }, {
        "name" : "reportnamesuffix",
        "type" : "string"
      }, {
        "name" : "sources",
        "type" : "array"
      } ]
    }
);

Ext.define("bank_create_bank_process_initiate_processPackages",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "createdbank",
        "type" : "bank_bank_template"
      } ]
    }
);

Ext.define("bank_create_bank_process_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
            "createdbank" : {
            }
          },
          "processVariables" : {
            "minscore" : "0.8",
            "reportnamesuffix" : ".PDF"
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "bank_create_bank_process_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "bank_create_bank_process_initiate_processPackages"
      } ]
    }
);

Ext.define("fs2_google_search_initiate_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "object_name",
        "type" : "array"
      }, {
        "name" : "object_nameattr",
        "type" : "string"
      }, {
        "name" : "query",
        "type" : "string"
      }, {
        "name" : "queryattr",
        "type" : "string"
      }, {
        "name" : "site",
        "type" : "array"
      }, {
        "name" : "siteattr",
        "type" : "string"
      }, {
        "name" : "source",
        "type" : "string"
      }, {
        "name" : "summary",
        "type" : "array"
      }, {
        "name" : "summaryattr",
        "type" : "string"
      }, {
        "name" : "url",
        "type" : "array"
      }, {
        "name" : "urlattr",
        "type" : "string"
      } ]
    }
);

Ext.define("fs2_google_search_initiate_template",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "data" : {
          "processPackages" : {
          },
          "processVariables" : {
            "summaryattr" : "summary",
            "queryattr" : "full-text",
            "source" : "general/Google",
            "siteattr" : "site",
            "object_nameattr" : "object_name",
            "urlattr" : "url"
          }
        },
        "type" : "memory"
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_google_search_initiate_processVariables"
      } ]
    }
);

Ext.define("fs2_da_def_create_search_external_sou_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "id",
        "type" : "array"
      }, {
        "name" : "query",
        "type" : "string"
      }, {
        "name" : "queryattr",
        "type" : "string"
      }, {
        "name" : "resultattr",
        "type" : "string"
      }, {
        "name" : "results",
        "type" : "array"
      }, {
        "name" : "sourcename",
        "type" : "string"
      } ]
    }
);

Ext.define("fs2_da_def_create_search_external_sou_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_search_external_sou",
        "extraParams" : {
          "type" : "fs2_da_def_create_search_external_sou_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_da_def_create_search_external_sou_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("fs2_da_def_create_list_banks_ffiec_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "displayattribute",
        "type" : "string"
      }, {
        "name" : "displays",
        "type" : "array"
      }, {
        "name" : "values",
        "type" : "array"
      } ]
    }
);

Ext.define("fs2_da_def_create_list_banks_ffiec_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_list_banks_ffiec",
        "extraParams" : {
          "type" : "fs2_da_def_create_list_banks_ffiec_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_da_def_create_list_banks_ffiec_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("fs2_da_def_create_get_source_descript_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "source",
        "type" : "string"
      } ]
    }
);

Ext.define("fs2_da_def_create_get_source_descript_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_get_source_descript",
        "extraParams" : {
          "type" : "fs2_da_def_create_get_source_descript_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_da_def_create_get_source_descript_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("fs2_da_def_create_google_search_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "array"
      }, {
        "name" : "object_nameattr",
        "type" : "string"
      }, {
        "name" : "query",
        "type" : "string"
      }, {
        "name" : "queryattr",
        "type" : "string"
      }, {
        "name" : "site",
        "type" : "array"
      }, {
        "name" : "siteattr",
        "type" : "string"
      }, {
        "name" : "source",
        "type" : "string"
      }, {
        "name" : "summary",
        "type" : "array"
      }, {
        "name" : "summaryattr",
        "type" : "string"
      }, {
        "name" : "url",
        "type" : "array"
      }, {
        "name" : "urlattr",
        "type" : "string"
      } ]
    }
);

Ext.define("fs2_da_def_create_google_search_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_google_search",
        "extraParams" : {
          "type" : "fs2_da_def_create_google_search_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_da_def_create_google_search_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("fs2_da_def_create_extract_attribute_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "attribute",
        "type" : "string"
      }, {
        "name" : "inputvalue",
        "type" : "string"
      }, {
        "name" : "outputvalue",
        "type" : "string"
      } ]
    }
);

Ext.define("fs2_da_def_create_extract_attribute_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_extract_attribute",
        "extraParams" : {
          "type" : "fs2_da_def_create_extract_attribute_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_da_def_create_extract_attribute_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("fs2_da_def_create_list_result_attribu_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "resultattributes",
        "type" : "array"
      }, {
        "name" : "source",
        "type" : "string"
      } ]
    }
);

Ext.define("fs2_da_def_create_list_result_attribu_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_list_result_attribu",
        "extraParams" : {
          "type" : "fs2_da_def_create_list_result_attribu_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_da_def_create_list_result_attribu_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("bank_da_def_create_create_bank_process_initiate_bankreport",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_da_def_create_create_bank_process_initiate_createdbank",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "content_folder",
        "type" : "string"
      }, {
        "name" : "fdic_certificate",
        "type" : "string"
      }, {
        "name" : "rssd_id",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_da_def_create_create_bank_process_initiate_processPackages",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "bankreport",
        "type" : "bank_da_def_create_create_bank_process_initiate_bankreport"
      }, {
        "name" : "createdbank",
        "type" : "bank_da_def_create_create_bank_process_initiate_createdbank"
      } ]
    }
);

Ext.define("bank_da_def_create_create_bank_process_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "externalobjectids",
        "type" : "array"
      }, {
        "name" : "externaltypename",
        "type" : "string"
      }, {
        "name" : "minscore",
        "type" : "float"
      }, {
        "name" : "reportnamesuffix",
        "type" : "string"
      }, {
        "name" : "sources",
        "type" : "array"
      } ]
    }
);

Ext.define("bank_da_def_create_create_bank_process_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/bank_create_bank_process",
        "extraParams" : {
          "type" : "bank_da_def_create_create_bank_process_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "bank_da_def_create_create_bank_process_initiate_processVariables"
      }, {
        "name" : "processPackages",
        "type" : "bank_da_def_create_create_bank_process_initiate_processPackages"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("fs2_da_def_create_list_external_sourc_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "sources",
        "type" : "array"
      } ]
    }
);

Ext.define("fs2_da_def_create_list_external_sourc_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_list_external_sourc",
        "extraParams" : {
          "type" : "fs2_da_def_create_list_external_sourc_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_da_def_create_list_external_sourc_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("fs2_da_def_create_list_query_attribut_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "queryattributes",
        "type" : "array"
      }, {
        "name" : "source",
        "type" : "string"
      } ]
    }
);

Ext.define("fs2_da_def_create_list_query_attribut_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_list_query_attribut",
        "extraParams" : {
          "type" : "fs2_da_def_create_list_query_attribut_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_da_def_create_list_query_attribut_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("fs2_da_def_create_list_banks_in_state_initiate_processVariables",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "displayattribute",
        "type" : "string"
      }, {
        "name" : "displays",
        "type" : "array"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "values",
        "type" : "array"
      } ]
    }
);

Ext.define("fs2_da_def_create_list_banks_in_state_initiate",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_list_banks_in_state",
        "extraParams" : {
          "type" : "fs2_da_def_create_list_banks_in_state_initiate"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "fs2_da_def_create_list_banks_in_state_initiate_processVariables"
      }, {
        "name" : "attachments",
        "type" : "array"
      } ]
    }
);

Ext.define("bank_da_def_create_bank_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_bank_folders",
        "extraParams" : {
          "type" : "bank_da_def_create_bank_folder"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_da_def_update_bank_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_bank_folders",
        "extraParams" : {
          "type" : "bank_da_def_update_bank_folder"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_da_def_delete_bank_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_bank_folders",
        "extraParams" : {
          "type" : "bank_da_def_delete_bank_folder"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_create_dm_folder"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_update_dm_folder"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_dm_folder",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_delete_dm_folder"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_da_def_update_external_content",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_external_contents",
        "extraParams" : {
          "type" : "bank_da_def_update_external_content"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "source",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_da_def_delete_external_content",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_external_contents",
        "extraParams" : {
          "type" : "bank_da_def_delete_external_content"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_da_def_import_external_content",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_external_contents",
        "extraParams" : {
          "type" : "bank_da_def_import_external_content"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "source",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_import_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_import_dm_document"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_update_dm_document"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_da_def_delete_dm_document"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_da_def_update_bank_report",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_bank_reports",
        "extraParams" : {
          "type" : "bank_da_def_update_bank_report"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_da_def_delete_bank_report",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_bank_reports",
        "extraParams" : {
          "type" : "bank_da_def_delete_bank_report"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_da_def_import_bank_report",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_bank_reports",
        "extraParams" : {
          "type" : "bank_da_def_import_bank_report"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_da_def_create_bank",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_banks",
        "extraParams" : {
          "type" : "bank_da_def_create_bank"
        }
      },
      "fields" : [ {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "content_folder",
        "type" : "string"
      }, {
        "name" : "fdic_certificate",
        "type" : "string"
      }, {
        "name" : "rssd_id",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_da_def_update_bank",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_banks",
        "extraParams" : {
          "type" : "bank_da_def_update_bank"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "content_folder",
        "type" : "string"
      }, {
        "name" : "fdic_certificate",
        "type" : "string"
      }, {
        "name" : "rssd_id",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_da_def_delete_bank",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_banks",
        "extraParams" : {
          "type" : "bank_da_def_delete_bank"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_create_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_create_rootbo"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_update_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_update_rootbo"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delete_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_delete_rootbo"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_selector_rootbo",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs",
        "extraParams" : {
          "type" : "xcp_da_def_selector_rootbo"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "selection",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_folderQuery_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sysobject",
        "extraParams" : {
          "type" : "folderQuery"
        }
      },
      "fields" : [ {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "icon",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("bank_search_for_banks_ft_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_banks",
        "extraParams" : {
          "type" : "bank_search_for_banks_ft"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "rssd_id",
        "type" : "string"
      }, {
        "name" : "fdic_certificate",
        "type" : "string"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "summary",
        "type" : "string"
      }, {
        "name" : "matchingterms",
        "type" : "array"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("bank_search_for_extern_1_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_external_contents",
        "extraParams" : {
          "type" : "bank_search_for_extern_1"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "source",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "summary",
        "type" : "string"
      }, {
        "name" : "matchingterms",
        "type" : "array"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_taskhistory_initiate",
        "extraParams" : {
          "type" : "xcp_taskhistory_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "activity_name",
        "type" : "string"
      }, {
        "name" : "date",
        "type" : "string"
      }, {
        "name" : "performer",
        "type" : "string"
      }, {
        "name" : "status",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_user_from_queue_initiate",
        "extraParams" : {
          "type" : "xcp_user_from_queue_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "user_list",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_queue_list_initiate",
        "extraParams" : {
          "type" : "xcp_queue_list_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "queuelist",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_activity_list_initiate",
        "extraParams" : {
          "type" : "xcp_activity_list_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "output_activity_names",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("fs2_search_external_sou_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_search_external_sou_initiate",
        "extraParams" : {
          "type" : "fs2_search_external_sou_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "results",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("fs2_list_banks_ffiec_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_list_banks_ffiec_initiate",
        "extraParams" : {
          "type" : "fs2_list_banks_ffiec_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "displays",
        "type" : "string"
      }, {
        "name" : "values",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("fs2_get_source_descript_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_get_source_descript_initiate",
        "extraParams" : {
          "type" : "fs2_get_source_descript_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("fs2_google_search_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_google_search_initiate",
        "extraParams" : {
          "type" : "fs2_google_search_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "site",
        "type" : "string"
      }, {
        "name" : "summary",
        "type" : "string"
      }, {
        "name" : "url",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("fs2_extract_attribute_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_extract_attribute_initiate",
        "extraParams" : {
          "type" : "fs2_extract_attribute_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "outputvalue",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("fs2_list_result_attribu_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_list_result_attribu_initiate",
        "extraParams" : {
          "type" : "fs2_list_result_attribu_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "resultattributes",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_userorgroup_selecti",
        "extraParams" : {
          "type" : "xcp_userorgroup_selecti_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "user_group_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("fs2_list_external_sourc_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_list_external_sourc_initiate",
        "extraParams" : {
          "type" : "fs2_list_external_sourc_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "sources",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("fs2_list_query_attribut_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_list_query_attribut_initiate",
        "extraParams" : {
          "type" : "fs2_list_query_attribut_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "queryattributes",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("fs2_list_banks_in_state_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/fs2_list_banks_in_state_initiate",
        "extraParams" : {
          "type" : "fs2_list_banks_in_state_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "displays",
        "type" : "string"
      }, {
        "name" : "values",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_versionHistoryQuery_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sysobject",
        "extraParams" : {
          "type" : "versionHistoryQuery"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_networklocation_selecti_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/networkLocations",
        "extraParams" : {
          "type" : "xcp_networklocation_selecti_ds"
        }
      },
      "fields" : [ {
        "name" : "location_id",
        "type" : "string"
      }, {
        "name" : "location_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_attachment_viewer_ds_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "pplication/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_attachment_viewer_ds"
        }
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_content_rt_query_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_documents",
        "extraParams" : {
          "type" : "xcp_content_rt_query"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_folder_rt_query_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_folder_rt_query"
        }
      },
      "fields" : [ {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("bank_search_for_banks_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_banks",
        "extraParams" : {
          "type" : "bank_search_for_banks"
        }
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "rssd_id",
        "type" : "string"
      }, {
        "name" : "fdic_certificate",
        "type" : "string"
      }, {
        "name" : "city",
        "type" : "string"
      }, {
        "name" : "state",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("bank_search_for_bank_fol_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_bank_folders",
        "extraParams" : {
          "type" : "bank_search_for_bank_fol"
        }
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("bank_search_for_bank_rep_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_bank_reports",
        "extraParams" : {
          "type" : "bank_search_for_bank_rep"
        }
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("bank_search_for_external_outputs",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_external_contents",
        "extraParams" : {
          "type" : "bank_search_for_external"
        }
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "source",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_dm_folder_base_folder_model",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "api" : {
          "read" : "application/xcp_dm_folders/template"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_dm_folders",
        "extraParams" : {
          "type" : "xcp_da_def_create_dm_folder"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_bank_report_import_bank_report_model",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "api" : {
          "read" : "application/bank_bank_reports/template"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_bank_reports",
        "extraParams" : {
          "type" : "bank_da_def_import_bank_report"
        }
      },
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "content_id",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("bank_external_content_import_external_con_model",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "api" : {
          "read" : "application/bank_external_contents/template"
        },
        "type" : "xcp_rest",
        "url" : "application/bank_external_contents",
        "extraParams" : {
          "type" : "bank_da_def_import_external_content"
        }
      },
      "fields" : [ {
        "name" : "source",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "content_id",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("roles",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "rest",
        "url" : "application/roles"
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "namespace",
        "type" : "string"
      } ]
    }
);

Ext.define("role",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "reader" : {
          "type" : "json"
        },
        "type" : "rest",
        "url" : "application/role"
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "namespace",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp.data.model.UserPreferences",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/currentUser/preferences",
        "extraParams" : {
          "fields" : "workflowAutoNextTask,role,delegate_task,delegateToUser,networkLocation"
        }
      },
      "fields" : [ {
        "name" : "workflowAutoNextTask",
        "type" : "string"
      }, {
        "name" : "role",
        "type" : "string"
      }, {
        "name" : "delegate_task",
        "type" : "string"
      }, {
        "name" : "delegateToUser",
        "type" : "string"
      }, {
        "name" : "networkLocation",
        "type" : "string"
      } ]
    }
);
