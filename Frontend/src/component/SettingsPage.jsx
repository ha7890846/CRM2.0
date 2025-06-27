import style from "../styling/setting.module.css";

const SettingsPage = () => {
    return (
        <>
            <section className={style.header}>
                Home{">"}Employees
            </section>
            <section style={{border:"2px solid #bababa",height:"80%",borderRadius:"10px",padding:"10px"}}>
                <div style={{borderBottom:"3px solid #bababa",display:"inline"}}>Edit Profile</div>
                <form action="">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="firstName" placeholder="Your First Name"/>
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastName" placeholder="Your Last Name"/>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder="Your email id"/>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" placeholder="Type Password"/>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="password" placeholder="Verify Password"/>
                    <button>Save</button>
                </form>
            </section>
        </>
    );
};
export default SettingsPage;