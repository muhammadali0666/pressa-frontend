import { Layouts } from "../../components/Layouts"


export const Dashboard = () => {
  // let getToken = localStorage.getItem("token");

  // window.addEventListener("click", function (e) {
  //   e.preventDefault();

  //   if (!getToken) {
  //     window.location.href = "/login";
  //   }
  // });
  return (
    <Layouts>
      {
        <div>Dashboard</div>
      }
    </Layouts>
  )
}
