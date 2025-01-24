const CTAIcon = () => {
	return (
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="187"
				height="200"
				viewBox="0 0 187 200"
				fill="none"
			>
				{/* Main Path */}
				<path
					d="M7.77783 175V158.333H178.889V175H7.77783ZM31.1112 150C26.8334 150 23.1726 148.369 20.1289 145.108C17.0852 141.847 15.5608 137.922 15.5556 133.333V41.6667C15.5556 37.0833 17.0801 33.1611 20.1289 29.9C23.1778 26.6389 26.8386 25.0056 31.1112 25H155.556C159.833 25 163.497 26.6333 166.546 29.9C169.594 33.1667 171.116 37.0889 171.111 41.6667V133.333C171.111 137.917 169.589 141.842 166.546 145.108C163.502 148.375 159.839 150.006 155.556 150H31.1112ZM31.1112 133.333H155.556V41.6667H31.1112V133.333Z"
					fill="#23F7DB"
				/>
				{/* Small Circle */}
				<path
					d="M93.0002 97.1818C97.5189 97.1818 101.182 93.5187 101.182 89C101.182 84.4813 97.5189 80.8182 93.0002 80.8182C88.4815 80.8182 84.8184 84.4813 84.8184 89C84.8184 93.5187 88.4815 97.1818 93.0002 97.1818Z"
					stroke="#23F7DB"
					strokeWidth="5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				{/* Gear Path with Fixed-Axis Rotation Around the Small Circle */}
				<path
					d="M87.5455 113.545C87.5455 114.992 88.1201 116.379 89.1431 117.402C90.166 118.425 91.5534 119 93 119C94.4466 119 95.834 118.425 96.8569 117.402C97.8799 116.379 98.4545 114.992 98.4545 113.545C98.476 112.607 98.7659 111.695 99.2897 110.917C99.8136 110.139 100.55 109.527 101.41 109.154C102.271 108.78 103.221 108.662 104.147 108.812C105.073 108.962 105.937 109.374 106.636 110C107.12 110.501 107.697 110.903 108.336 111.181C108.975 111.459 109.662 111.609 110.358 111.621C111.055 111.634 111.747 111.51 112.395 111.255C113.043 111 113.635 110.62 114.136 110.136C114.638 109.653 115.039 109.075 115.317 108.437C115.595 107.798 115.745 107.111 115.758 106.415C115.771 105.718 115.646 105.026 115.391 104.378C115.136 103.73 114.756 103.138 114.273 102.636C113.658 101.955 113.247 101.115 113.086 100.212C112.925 99.3084 113.02 98.3781 113.361 97.5262C113.702 96.6743 114.274 95.935 115.014 95.3921C115.754 94.8491 116.631 94.5244 117.545 94.4545C118.992 94.4545 120.379 93.8799 121.402 92.8569C122.425 91.834 123 90.4466 123 89C123 87.5534 122.425 86.166 121.402 85.1431C120.379 84.1201 118.992 83.5455 117.545 83.5455C116.631 83.4756 115.754 83.1509 115.014 82.6079C114.274 82.065 113.702 81.3257 113.361 80.4738C113.02 79.6219 112.925 78.6916 113.086 77.7883C113.247 76.8851 113.658 76.0451 114.273 75.3636C115.213 74.351 115.713 73.0063 115.661 71.6253C115.61 70.2444 115.013 68.9403 114 68C112.987 67.0597 111.643 66.5602 110.262 66.6113C108.881 66.6625 107.577 67.2601 106.636 68.2727C105.92 68.9144 105.031 69.3315 104.08 69.4723C103.128 69.6131 102.156 69.4713 101.285 69.0646C100.414 68.6579 99.6807 68.0042 99.1775 67.1846C98.6743 66.3651 98.4229 65.4157 98.4545 64.4545C98.4545 63.0079 97.8799 61.6205 96.8569 60.5976C95.834 59.5747 94.4466 59 93 59C91.5534 59 90.166 59.5747 89.1431 60.5976C88.1201 61.6205 87.5455 63.0079 87.5455 64.4545C87.5771 65.4157 87.3257 66.3651 86.8225 67.1846C86.3193 68.0042 85.5865 68.6579 84.715 69.0646C83.8435 69.4713 82.8718 69.6131 81.9204 69.4723C80.969 69.3315 80.08 68.9144 79.3636 68.2727C78.898 67.7713 78.3382 67.3665 77.7162 67.0815C77.0942 66.7964 76.4221 66.6366 75.7383 66.6113C74.3574 66.5602 73.0126 67.0597 72 68C70.9874 68.9403 70.3897 70.2444 70.3386 71.6253C70.2874 73.0063 70.787 74.351 71.7273 75.3636C72.3416 76.0451 72.7527 76.8851 72.9138 77.7883C73.075 78.6916 72.9798 79.6219 72.639 80.4738C72.2983 81.3257 71.7256 82.065 70.986 82.6079C70.2464 83.1509 69.3694 83.4756 68.4545 83.5455C67.0079 83.5455 65.6205 84.1201 64.5976 85.1431C63.5747 86.166 63 87.5534 63 89C63 90.4466 63.5747 91.834 64.5976 92.8569C65.6205 93.8799 67.0079 94.4545 68.4545 94.4545C69.3694 94.5244 70.2464 94.8491 70.986 95.3921C71.7256 95.935 72.2983 96.6743 72.639 97.5262C72.9798 98.3781 73.075 99.3084 72.9138 100.212C72.7527 101.115 72.3416 101.955 71.7273 102.636C70.7508 103.649 70.2166 105.008 70.2422 106.415C70.2677 107.821 70.851 109.16 71.8636 110.136C72.8763 111.113 74.2354 111.647 75.6419 111.621C77.0484 111.596 78.3872 111.013 79.3636 110C80.0627 109.374 80.9265 108.962 81.8527 108.812C82.7789 108.662 83.7286 108.78 84.5895 109.154C85.4504 109.527 86.1864 110.139 86.7103 110.917C87.2341 111.695 87.524 112.607 87.5455 113.545Z"
					stroke="#23F7DB"
					strokeWidth="5"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="rotate-gear" // Apply custom CSS class
					style={{ transformOrigin: "93px 89px" }} // Fixed axis (center of the small circle)
				/>
			</svg>

			{/* Add CSS for the rotation animation */}
			<style>
				{`
					@keyframes rotate {
						from {
							transform: rotate(0deg);
						}
						to {
							transform: rotate(360deg);
						}
					}
					.rotate-gear {
						animation: rotate 10s linear infinite; // Adjust duration as needed
					}
				`}
			</style>
		</div>
	);
};

export default CTAIcon;
