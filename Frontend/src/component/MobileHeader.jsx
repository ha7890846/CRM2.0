const MobileHeader = ({ name, activePage }) => {
    return (
        <>
            <h3>
                Canova<span style={{ color: "yellow" }}>CRM</span>
            </h3>
            <h3>{activePage}</h3>
            <h3>{name}</h3>
        </>
    );
};
export default MobileHeader;