const HeaderBox = ({type = 'title' , title, subtext, user}: HeaderBoxProps) => {
    return (
        <div className={"flex flex-col gap-1"}>
            <h1 className={"lg:text-[30px] lg:leading-[38px] font-semibold text-gray-900 text-[24px] leading-[30px]"}>
                {title},
                {type === 'greeting' && (
                    <span className={"text-bank-gradient"}>
                        &nbsp;{user}
                    </span>
                )}
            </h1>
            <p className={"font-normal lg:text-[16px] lg:leading-[24px] text-gray-600 text-[14px] leading-[20px]"}>
                {subtext}
            </p>
        </div>
    )
}
export default HeaderBox
