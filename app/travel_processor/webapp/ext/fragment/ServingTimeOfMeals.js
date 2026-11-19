sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
       onSelectionChange: function(oEvent) {
        var sNewDeliveryPreferenceCode = oEvent.getParameter("item").getKey();
        var oSegmBtn = oEvent.getSource();
        osegmBtn.getBindingContext().setProperty("deliveryPreference_Code", sNewDeliveryPreferenceCode);
    }
};
});
