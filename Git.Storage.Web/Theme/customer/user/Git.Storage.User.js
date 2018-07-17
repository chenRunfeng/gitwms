var User = {
    PageClick: function (pageIndex, pageSize) {
        pageSize = pageSize == undefined ? 10 : pageSize;
        var search = $("#txtSearch").val();
        var userCode = $("#txtUserCode").val();
        var userName = $("#txtUserName").val();
        var roleNum = $("#ddlRole").val();
        var departNum = $("#ddlDepart").val();
        var param = {};
        param["PageIndex"] = pageIndex;
        param["PageSize"] = pageSize;
        param["userCode"] = userCode;
        param["userName"] = userName;
        param["roleNum"] = roleNum;
        param["departNum"] = departNum;
        param["search"] = search;
        $.gitAjax({
            url: "/UserAjax/GetAdminList",
            data: param,
            type: "post",
            dataType: "json",
            success: function (result) {
                var json = result;
                var Html = "";
                if (json.Data != undefined && json.Data.List != undefined && json.Data.List.length > 0) {
                    $(json.Data.List).each(function (i, item) {
                        Html += "<tr class=\"odd gradeX\">";
                        Html += "<td>";
                        if (item.UserCode != "DA_0000") {
                            Html += "<input type=\"checkbox\" name=\"user_item\" class=\"checkboxes\"  data=\"" + item.UserCode + "\" value=\"" + item.UserCode + "\"/>";
                        }
                        Html += "</td>";
                        Html += "<td>" + item.UserName + "</td>";
                        Html += "<td>" + item.UserCode + "</td>";
                        Html += "<td>" + item.RealName + "</td>";
                        Html += "<td>" + item.Email + "</td>";
                        Html += "<td>" + item.Mobile + "</td>";
                        Html += "<td>" + item.LoginCount + "</td>";
                        Html += "<td>" + item.DepartName + "</td>";
                        Html += "<td>";
                        Html += item.RoleName == null ? "" : item.RoleName;
                        Html += "</td>";
                        Html += "<td>";
                        if (item.UserCode != "DA_0000") {
                            Html += "<a class=\"icon-edit\" href=\"javascript:void(0)\" onclick=\"User.Add('" + item.UserCode + "')\" title=\"编辑\"></a>&nbsp;&nbsp;";
                            Html += "<a class=\"icon-remove\" href=\"javascript:void(0)\" onclick=\"User.Delete('" + item.UserCode + "')\" title=\"删除\"></a>";
                        }
                        Html += "</td>";
                        Html += "</tr>";
                    });
                }
                $("#tabInfo tbody").html(Html);
                $("#mypager").pager({ pagenumber: pageIndex, recordCount: json.RowCount, pageSize: pageSize, buttonClickCallback: User.PageClick });
            }
        });
    },
    ToExcel: function () {
        var userCode = $("#txtUserCode").val();
        var userName = $("#txtUserName").val();
        var roleNum = $("#ddlRole").val();
        var departNum = $("#ddlDepart").val();
        var param = {};
        param["userCode"] = userCode;
        param["userName"] = userName;
        param["roleNum"] = roleNum;
        param["departNum"] = departNum;
        $.gitAjax({
            url: "/UserAjax/ToExcel", type: "post", data: { "entity": JSON.stringify(param) }, success: function (result) {
                if (result.Path != undefined && result.Path != "") {
                    var path = unescape(result.Path);
                    window.location.href = path;
                    return true;
                } else {
                    $.jBox.info(result.d, "提示");
                    return true;
                }
                return true;
            }
        });
        return true;
    },
    SelectAll: function (item) {
        var flag = $(item).attr("checked");
        if (flag || flag == "checked") {
            $("input[name='user_item']").attr("checked", true);
        }
        else {
            $("input[name='user_item']").attr("checked", false);
        }
    },
    Add: function (userCode) {
        userCode = userCode == undefined ? "" : userCode;
        var submit = function (v, h, f) {
            if (v == true) {
                var userCode = h.find("#txtUserCode").val();
                var userName = h.find("#txtUserName").val();
                var passWord = h.find("#txtPassword").val();
                var confirm = h.find("#txtConfirm").val();
                var realName = h.find("#txtRealName").val();
                var email = h.find("#txtEmail").val();
                var phone = h.find("#txtPhone").val();
                var mobile = h.find("#txtMobile").val();
                var roleNum = h.find("#ddlRole").val();
                var departNum = h.find("#ddlDepart").val();
                if (userName == undefined || userName == "") {
                    $.jBox.tip("请输入用户名", "warn");
                    return false;
                }
                if (passWord == undefined || passWord == "") {
                    $.jBox.tip("请输入密码", "warn");
                    return false;
                }
                if (confirm == undefined || confirm == "") {
                    $.jBox.tip("请输入确认密码", "warn");
                    return false;
                }
                if (passWord != confirm) {
                    $.jBox.tip("密码和确认密码不一致", "warn");
                    return false;
                }
                var param = {};
                param["UserCode"] = userCode;
                param["UserName"] = userName;
                param["PassWord"] = passWord;
                param["RealName"] = realName;
                param["Email"] = email;
                param["Phone"] = phone;
                param["Mobile"] = mobile;
                param["RoleNum"] = roleNum;
                param["DepartNum"] = departNum;
                $.gitAjax({
                    url: "/UserAjax/AddUser", type: "post", data: { "entity": JSON.stringify(param) }, success: function (result) {
                        if (result.d == "success") {
                            if (userCode == undefined || userCode == "") {
                                $.jBox.tip("添加成功", "success");
                            } else {
                                $.jBox.tip("编辑成功", "success");
                            }
                            User.PageClick(1);
                            return true;
                        } else {
                            if (userCode == undefined || userCode == "") {
                                $.jBox.tip("添加失败" + result.d, "error");
                            }
                            else {
                                $.jBox.tip("编辑失败" + result.d, "error");
                            }
                        }
                    }
                });
                return true;
            } else {
                return true;
            }
        }
        if (userCode == undefined || userCode == "") {
            $.jBox.open("get:/Home/AddUser", "添加用户", 500, 300, { buttons: { "确定": true, "关闭": false }, submit: submit });
        } else {
            $.jBox.open("get:/Home/AddUser?userCode=" + userCode, "编辑用户", 500, 300, { buttons: { "确定": true, "关闭": false }, submit: submit });
        }
    },
    Delete: function (userCode) {
        var submit = function (v, h, f) {
            if (v == 'ok') {
                var param = {};
                param["userCode"] = userCode;
                $.gitAjax({
                    url: "/UserAjax/Delete", type: "post", data: param, success: function (result) {
                        if (result.d == "success") {
                            User.PageClick(1);
                        } else {
                            $.jBox.tip("删除失败", "error");
                        }
                    }
                });
            }
        };
        $.jBox.confirm("确定要删除吗？", "提示", submit);
    },
    BatchDel: function () {
        var chklist = $("#tabInfo tbody tr").find("input:checked");
        var ids = "";
        $.each(chklist, function (index, item) {
            ids += $(item).attr("data") + ",";
        });
        if (ids.length > 0) {
            var submit = function (v, h, f) {
                if (v == 'ok') {
                    var param = {};
                    param["userCode"] = ids;
                    $.gitAjax({
                        url: "/UserAjax/BatchDel", type: "post", data: param, success: function (result) {
                            if (result.d == "success") {
                                User.PageClick(1);
                            } else {
                                $.jBox.tip("删除失败", "error");
                            }
                        }
                    });
                }
            };
            $.jBox.confirm("确定要删除吗？", "提示", submit);
        }
        else {
            $.jBox.tip("请至少选择一条数据!", 'info');
        }
    },
    SearchEvent: function () {
        $("#btnHSearch").click(function () {
            var flag = $("#divHSearch").css("display");
            if (flag == "none") {
                $("#txtSearch").val("");
                $("#divHSearch").slideDown("slow");
            } else {
                $("#divHSearch").slideUp("slow");
            }
        });
    },
    Audite: function (flag, orderNum) {
        // flag 1是查看详细 2是审核
        var submit = function (v, h, f) {
            if (flag == 2) {
                var Reason = h.find("#txtReason").val();
                var param = {};
                var status = 0;
                if (v == 1) {
                    status = 2
                } else if (v == 2) {
                    status = 3;
                }
                if (v != 3) {
                    param["OrderNum"] = orderNum;
                    param["Status"] = status;
                    param["Reason"] = Reason;
                    $.gitAjax({
                        url: "/OutStorage/ProductManagerAjax/Audit",
                        data: param,
                        type: "post",
                        dataType: "json",
                        success: function (result) {
                            if (result.d != undefined) {
                                if (result.d == "1000") {
                                    $.jBox.tip("出库单审核成功", "success");
                                    //location.href = "OutStorage/Product/List";
                                    //OutStore.PageSClick(1, 20);
                                } else if (result.d == "1001") {
                                    $.jBox.tip("出库单不存在", "warn");
                                } else if (result.d == "1002") {
                                    $.jBox.tip("出库单已经审核", "warn");
                                } else if (result.d == "1003") {
                                    $.jBox.tip("出库产品不存在", "warn");
                                } else if (result.d == "1004") {
                                    $.jBox.tip("出库数不满足要求", "warn");
                                }
                            } else {
                                $.jBox.tip("出库单审核失败", "warn");
                            }
                        }
                    });
                }
            }
        };
        if (flag == 1) {
            $.jBox.open("get:/OutStorage/Product/Detail?flag=" + flag + "&orderNum=" + orderNum, "出库单详细", 800, 410, { buttons: { "关闭": 3 }, submit: submit });
        } else if (flag == 2) {
            $.jBox.open("get:/OutStorage/Product/Detail?flag=" + flag + "&orderNum=" + orderNum, "出库单审核", 800, 410, { buttons: { "审核通过": 1, "审核不通过": 2, "关闭": 3 }, submit: submit });
        }
    },
    Remind: function (flag, orderNum) {
        // flag 1是查看详细 2是审核
        var submit = function (v, h, f) {
            if (flag == 2) {
                var Remark = h.find("#txtReason").val();
                var param = {};
                var status = 0;
                if (v == 1) {
                    status = 1
                } else if (v == 2) {
                    status = 3;
                }
                if (v != 3) {
                    param["ID"] = orderNum;
                    param["Status"] = status;
                    param["Remark"] = Remark;
                    $.gitAjax({
                        url: "/OutStorage/ProductManagerAjax/Remind",
                        data: param,
                        type: "post",
                        dataType: "json",
                        success: function (result) {
                            if (result.d != undefined) {
                                if (result.d == "1000") {
                                    $.jBox.tip("已提醒相关人员维护", "success");
                                    location.href = "/Home/Welcome";
                                    //OutStore.PageSClick(1, 20);
                                } else {
                                    $.jBox.tip("提醒失败", "warn");
                                }
                            }
                        }
                    });
                }
            }
        };
        if (flag == 1) {
            $.jBox.open("get:/OutStorage/Product/SRDetail?flag=" + flag + "&ID=" + orderNum, "维护单详细", 800, 410, { buttons: { "关闭": 3 }, submit: submit });
        } else if (flag == 2) {
            $.jBox.open("get:/OutStorage/Product/SRDetail?flag=" + flag + "&ID=" + orderNum, "维护单审核", 800, 410, { buttons: { "确定": 1, "关闭": 3 }, submit: submit });
        }
    }
};

