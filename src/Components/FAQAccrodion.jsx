import { useState } from 'react';
import SectionTitle from './SectionTitle';

const accordionData = [
    {title: "What is EduMate?",
    subtitle: "EduMate is an online group study platform for students to collaborate on assignments, share assignments, and enhance their learning experience remotely by geeting mark/feedback from friends for each assignment. ", colorBg: 'bg-amber-500', colorBorder: 'border-amber-500'},
    {title: 'Who can use EduMate?', subtitle: 'EduMate is open to students of all ages and disciplines. Whether you are in high school, college, or university, you can use the platform to form or join groups for various academic tasks     ', colorBg: 'bg-orange-500', colorBorder: 'border-orange-500'},
    {title: ' Is EduMate free to use?', subtitle: 'Yes, EduMate is free to use. Students can use the platform to form any groups for various academic tasks', colorBg: 'bg-red-500', colorBorder: 'border-red-500'},
    {title: 'Is EDUMATE secure?', subtitle: 'Yes, EDUMATE prioritizes user security. We implement best practices for data protection, including secure login protocols and encrypted storage of user information.', colorBg: 'bg-sky-500', colorBorder: 'border-sky-500'},
    {title: 'Can I use EDUMATE for individual study or project management?    ', subtitle: 'While EDUMATE primarily focuses on facilitating group collaboration, you can also use it for individual study or project management. Features like task allocation, deadlines, and note-taking can be helpful for individual organization and organization as well.', colorBg: 'bg-purple-500', colorBorder: 'border-purple-500'}
];
const FAQAccrodion = () => {
        
        // Toggle State and Function
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div className='py-7 md:py-12 '> 
        <SectionTitle title="FAQ" />
             <div className="w-fit mx-auto min-h-[300px] flex gap-1 ">
                {accordionData.map((_, idx) => (
                    <div key={idx} className="flex">
                        {/* toggle item */}
                        <button onClick={() => handleToggle(idx)} className={`h-full  flex justify-around flex-col items-center w-14 ${_.colorBg} text-white rounded-lg relative`}>
                            {isActive === idx && <span className={`w-0 h-0  ${_.colorBorder} border-r-[20px] border-b-[20px] border-r-transparent absolute rotate-[225deg] left-10 top-4`}></span>}
                            <p>{idx + 1}</p>
                            <p className="rotate-[270deg]">FAQ</p>
                        </button>
                        {/* container */}
                        <div
                            className={`grid place-content-center space-y-4 bg-gray-200  shadow-md rounded-lg ${
                                isActive === idx ? 'w-56 lg:w-96 px-5 opacity-1 scale-1' : 'w-0 opacity-0 scale-0'
                            } text-black ml-2 duration-300 ease-in-out`}
                        >
                            <h2 className="lg:text-2xl font-bold">{_.title}</h2>
                            <p className="text-black/60">{_.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
    
        </div>
    );
};

export default FAQAccrodion;