import "./elon_top.css";

export const ElonTop = () => {
  return (
    <div className="elon_top">
      <h2 className="elon_date_paragraph">Vaqt va yo’nalishni tanlang</h2>
      <p className="elon_date_p">O’tkaziladigan sanani kiriting</p>
      <div className="elon_date__top_box">
        <input
          type="date"
          style={{ color: "black" }}
          className="elon_date_input"
        />
        <input
          type="time"
          style={{ padding: "16px" }}
          className="elon_date_input"
        />
      </div>
      <div className="elon_date__middle_box">
        <div className="elon_date__middle_box_mini">
          <p className="elon_date_middle_select_p">Yo’nalishni belgilang</p>
          <select
            name=""
            id="date"
            style={{ marginRight: "30px" }}
            className="elon_date_middle_select"
          >
            <option value="" className="elon_date_middle_option">
              Information Technologies
            </option>
          </select>
        </div>
        <div className="elon_date__middle_box_mini">
          <p className="elon_date_middle_select_p">Ichki yo’nalish</p>
          <select name="" id="date" className="elon_date_middle_select">
            <option value="" className="elon_date_middle_option">
              Java developer
            </option>
          </select>
        </div>
      </div>
      <div className="elon_date__bottom_box">
        <div className="elon_date__bottom_box_left">
          <p className="elon_date_bottom_select_p">Tadbir turi</p>
          <div className="elon_date__bottom_box_mini_inner">
            {/* <button className="elon_date__bottom_box_mini_btn">Online</button> */}
            <input type="text" className="elon_date__bottom_box_mini_btn" placeholder="Online | Offline"/>
            {/* <button className="elon_date__bottom_box_mini_btn">Offline</button> */}
          </div>
        </div>
        <div className="elon_date__bottom_box_right">
          <p className="elon_date_bottom_select_p">Link kiriting</p>
          <input style={{color: '#0085FF'}} className="elon_date__bottom_box_mini_btn" placeholder="https://www.youtube.com/liver24"/>
        </div>
      </div>
    </div>
  );
};
