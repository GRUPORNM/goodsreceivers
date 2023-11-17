sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel"
],
    function (BaseController, JSONModel) {
        "use strict";

        return BaseController.extend("goodsreceiversmanagement.controller.GoodsReceiver", {
            onInit: function () {
                var oViewModel = new JSONModel({
                    busy: false,
                    delay: 0
                });

                this.setModel(oViewModel, "goodsReceiverView");
                this.getOwnerComponent().getRouter().attachRouteMatched(this.onObjectMatched, this);
                this.getRouter().attachRouteMatched(this.getUserAuthentication, this);
            }
        });
    });
