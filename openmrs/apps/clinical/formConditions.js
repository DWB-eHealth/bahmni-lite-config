Bahmni.ConceptSet.FormConditions.rules = {
    'Diastolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    },
    'Place of the visit': function (formName, formFieldValues) {
        var conditions = {enable: [], disable: []};
	var otherReasonLine = "Other";
        var conditionConcept = formFieldValues['Place of the visit'];
        if (conditionConcept == 'Other') {
            conditions.enable.push("If other, specify:")
        } else {
            conditions.disable.push("If other, specify:")
        }
	return conditions;
    },
    'Change in diagnosis': function (formName, formFieldValues) {
        var conditions = {
            show: [],
            hide: []
        };
        
        var en4Drugs = "Diagnosis block";
        var result = formFieldValues['Change in diagnosis'];
        if (result == "1") {
            conditions.show.push( en4Drugs);
        } else {
            conditions.hide.push( en4Drugs);
        }
        return conditions;
    },

    'Referral Out List': function (formName, formFieldValues) {
        var conceptToEnable = "Other specialist";
        var conditions = {enable: [], disable: []};
        var Referral = formFieldValues['Referral Out List'];
        if (Referral && (Referral == "Other" || Referral.value == "Other")) {
            conditions.enable.push(conceptToEnable)
        } else {
            conditions.disable.push(conceptToEnable)
        }
        return conditions;
    },
    'Systolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    }
};
