const CheckboxIcon = () => {
    return (
        <svg
            className="
            absolute top-0 bottom-0 left-0 right-0 m-auto
            w-4 h-4
            hidden peer-checked:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 19 4 12"></polyline>
        </svg>
    )
}

export default CheckboxIcon;