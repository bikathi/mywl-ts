import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

export default function() {
    // types- default, info, warning, success, danger
    function openToast(message: string, type: string): void {
        createToast(message, {
			position: 'top-center',
			showIcon: true,
			hideProgressBar: true,
			timeout: 3000,
			showCloseButton: false,
			type: type,
			transition: 'slide'
		});
    }

    return { openToast }
}