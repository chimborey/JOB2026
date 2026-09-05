import LoginAccount from "../../API/Auth/LoginAccount";
import RegisterAccount from "../../API/Auth/RegisterAccount";

export default  function LoginForm(){
      return(
            <section className=" w-full overflow-hidden py-12 md:py-20">
                  <main className=" mt-12 container mx-auto md:max-w-7xl sm:px-4 md:px-6 lg:px-8">
                        <LoginAccount />
                        <RegisterAccount />
                  </main>
            </section>
      )
}