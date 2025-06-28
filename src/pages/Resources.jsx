import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDownContent from '../components/dropdown/DropDownContent';
import { PiShieldBold } from "react-icons/pi";
import { MdOutlineLock } from "react-icons/md";
import { RxTarget } from "react-icons/rx";
import { LiaWalletSolid } from "react-icons/lia";
import { CgDollar } from "react-icons/cg";
import { MdOutlineHouse } from "react-icons/md";



const Resources = () => {

	const [openResources, setopenResources] = useState(false)

	return (
		<div
			className=' flex items-center justify-center relative max-mobile:static max-mobile:block'
			onMouseEnter={() => setopenResources(true)}
			onMouseLeave={() => setopenResources(false)}>
			<span

				className=' flex items-center justify-center relative'>
				Resources
				<MdKeyboardArrowDown size={20} />
			</span>

			{openResources && (
				<div className=' text-[#5b5b5b] absolute top-6 -left-16 max-tablet:-left-28
				max-mobile:static 
				'>
					<div className=' bg-white grid grid-cols-2 gap-10  w-max py-10 px-8 rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.3)]
					max-tablet:gap-4 max-tablet:px-3 max-tablet:py-5 
					max-mobile:py-3 max-mobile:gap-0 max-mobile:grid-cols-1
					'>

						<DropDownContent
							iconBgColor='#0037ff30'
							icon={<PiShieldBold color='blue' size={25} />}
							title="Blog"
						/>

						<DropDownContent
							iconBgColor='#51cbff50'
							icon={<MdOutlineLock size={25} color='#51CBFF' />}
							title='Reports'
						/>

						<DropDownContent
							iconBgColor='#1cb50e2e'
							icon={<RxTarget size={25} color='#1CB50E' />}
							title='Comics'
						/>

						<DropDownContent
							iconBgColor='#ff56a83b'
							icon={<LiaWalletSolid size={25} color='#FF56A8' />}
							title='Calculator'
						/>

						<DropDownContent
							iconBgColor='#1a25423f'
							icon={<CgDollar size={25} color='#1A2542' />}
							title='Newsletter'
						/>

						<DropDownContent
							iconBgColor='#ff510133'
							icon={<MdOutlineHouse size={25} color='#FF5101' />}
							title='Ebook'
						/>

					</div>
				</div>
			)}
		</div>
	)
}

export default Resources