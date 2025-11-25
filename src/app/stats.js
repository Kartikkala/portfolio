export default function Stats() {
    return (
        <div className="flex w-full justify-center">
            {/* LeetCode Stats */}
            <div className="flex flex-col gap-4 p-6 rounded-xl bg-[#313244] items-center justify-center min-h-[200px] w-full md:w-1/2">
                <h3 className="text-xl font-bold text-[#f4dfdb]">LeetCode Stats</h3>
                {/* Placeholder for LeetCode Stats */}
                <div className="w-full h-32 bg-[#1e1e2e] rounded-lg flex items-center justify-center text-[#a6adc8]">
                    <img
                        src="https://leetcode-stats-api.herokuapp.com/sirkartik?theme=Dark"
                        alt="LeetCode Stats"
                        className="max-w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
