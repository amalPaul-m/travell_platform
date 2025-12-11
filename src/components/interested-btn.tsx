interface InterestedBtnProps {
  setHomeDetails: (value: boolean) => void;
}

const InterestedBtn: React.FC<InterestedBtnProps> = ({ setHomeDetails }) => {
    return (
        <button className=" mt-2 px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold 
        flex items-center justify-center gap-2
        hover:bg-blue-700 active:scale-95 transition"
        onClick = { ()=> setHomeDetails(true) }
        >

        <svg
            className="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
            />
        </svg>

        </button>

    );
};
export default InterestedBtn;
