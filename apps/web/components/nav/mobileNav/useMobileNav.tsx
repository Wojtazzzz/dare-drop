import { useRef, useState } from 'react';
import { usePressKey } from '../../../../hooks/usePressKey';

export const useMobileNavigation = () => {
	const [isNavigationActive, setIsNavigationActive] = useState(false);
	const navigationButtonRef = useRef<HTMLButtonElement>(null);

	usePressKey('Escape', closeNavigationOnEsc);

	const toggleNavigation = () => {
		setIsNavigationActive((prevState) => !prevState);
	};

	const closeNavigation = () => {
		setIsNavigationActive(false);
	};

	// classic fn, beacause used before declaration
	function closeNavigationOnEsc() {
		if (!isNavigationActive) {
			return;
		}

		if (!navigationButtonRef.current) {
			return;
		}

		navigationButtonRef.current.focus();
		setIsNavigationActive(false);
	}

	return {
		navigationButtonRef,
		isNavigationActive,
		toggleNavigation,
		closeNavigation,
	};
};
