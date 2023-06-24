import { useRef, useState } from 'react';
import { usePressKey } from '../../../../hooks/usePressKey';

export const useMobileNav = () => {
	const [isNavActive, setisNavActive] = useState(false);
	const navButtonRef = useRef<HTMLButtonElement>(null);

	usePressKey('Escape', closeNavOnEsc);

	const toggleNav = () => {
		setisNavActive((prevState) => !prevState);
	};

	const closeNav = () => {
		setisNavActive(false);
	};

	// classic fn, beacause used before declaration
	function closeNavOnEsc() {
		if (!isNavActive) {
			return;
		}

		if (!navButtonRef.current) {
			return;
		}

		navButtonRef.current.focus();
		setisNavActive(false);
	}

	return {
		navButtonRef,
		isNavActive,
		toggleNav,
		closeNav,
	};
};
