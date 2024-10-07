function FooterList({ title, list, apply, badge }) {
    return (
        <ul className="list-none flex flex-col gap-3">
            <li className="text-sm text-footer-title cursor-pointer">{title}</li>
            {list.map((item, index) => <li key={index} className="text-base">{item}
                {apply && index === badge && <span className="bg-green-50 text-green-800 rounded-full px-2 py-1 ml-2 text-xs border border-green-300 cursor-pointer">New</span>}

            </li>)}
        </ul>
    )
}

export default FooterList
