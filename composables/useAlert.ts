enum AlertTypes {
    Info = "bg-blue-600",
    Success = "bg-teal-500",
    Danger = "bg-red-500",
    Warning = "bg-yellow-500",
    Secondary = "bg-gray-500"
}

export default function() {
    const displayAlert = ref(false);
    const alertColor = ref(AlertTypes.Info);
    const alertMessage = ref("Sample Message");

    function openAlert(message: string, type: string): void {
        switch(type) {
            case "info": {
                alertColor.value = AlertTypes.Info;
                break;
            }

            case "success": {
                alertColor.value = AlertTypes.Success;
                break;
            }

            case "danger": {
                alertColor.value = AlertTypes.Danger;
                break;
            }

            case "warning": {
                alertColor.value = AlertTypes.Warning;
                break;
            }

            case "secondary": {
                alertColor.value = AlertTypes.Secondary;
                break;
            }
        }

        alertMessage.value = message.trim();
        displayAlert.value = true;
        console.log("alertColor: ", alertColor.value);
    }

    function hideAlert(): void {
        setTimeout(() => {
            displayAlert.value = false;
        }, 5000)
    }

    watch(
		displayAlert,
		(newState) => {
			if (newState === true) {
				hideAlert();
			}
		},
		{ immediate: true },
	);

    return { displayAlert, alertMessage, openAlert }
}