import "./sidebar.css";
import SearchAdmin from "../../assets/img/search_admin.png";
import Notificate from "../../assets/img/notificate.png";
import Pro from "../../assets/img/habiib.jfif";

export const SidebarHeader = ({ setSearch }) => {
  const searchFunction = async (e) => {
    e.preventDefault();
    const { search } = e.target;

    await fetch("https://pressa-backend-end.onrender.com/search", {
      method: "GET",
      headers: { search: search.value },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Ma'lumot topilmadi!!!") {
          alert(data.msg);
        }
        if (data.msg !== "Ma'lumot topilmadi!!!") {
          setSearch(data);
        }
      });
    search.value = "";
  };

  return (
    <form className="admin_header" onSubmit={(e) => searchFunction(e)}>
      <img
        src={SearchAdmin}
        alt="img"
        className="admin_header_img_one"
        width={18}
        height={18}
      />
      <input
        type="text"
        className="admin_header_input"
        placeholder="search"
        name="search"
        required
      />
      <div className="admin_headaer_box">
        <img
          src={Notificate}
          alt="img"
          className="admin_header_img"
          width={28}
          height={29}
        />
        <img
          className="admin_header_img_next"
          src={Pro}
          alt="img"
          width={44}
          height={44}
        />
        <span className="admin_span">
          <p className="admin_header_p">Habib Nurmagamedov</p>
          <p className="admin_header_p_next">id:12432</p>
        </span>
      </div>
    </form>
  );
};
