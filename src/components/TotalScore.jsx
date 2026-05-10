const TotalScore = ({ score }) => {
    return (
        <div className="max-w-full mx-auto h-50 flex justify-between items-center border-2 border-red-500">
            <div className="w-fit border-2 border-red-500">
                <h1 className="text-center font-medium border-2 border-red-500 text-[60px] leading-15">
                    {score}
                </h1>
                <p className="border-2 border-red-500 font-medium text-[18px] leading-7.5">
                    Total Score
                </p>
            </div>

        </div>
    )
}

export default TotalScore