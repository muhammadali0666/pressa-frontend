import "./elon.css";

export const ElonBottom = () => {
  return (
    <div className="elon_bottom">
      <p className="elon_bottom-p">Post</p>
      <h2 className="elon_bottom_paragraph">Mavzuni sarlavhasi</h2>
      <div className="elon_bottom_box">
        <label htmlFor="elon_bottom" className="elon_bottom_label">
          Description
        </label>
        <input type="text" id="elon_bottom" placeholder="Description" className="elon_bottom_input" />
      </div>
      <div className="elon_btns_box">
        <p className="elon_btn_p">Rasm yuklash</p>
        <div className="elon_btns_mini">
          <input type="file" className="elon_btns_one" placeholder="upload img"/>
          <input type="file" className="elon_btns_one" placeholder="upload img"/>
          <input type="file" className="elon_btns_one" placeholder="upload img"/>
        </div>
        <p className="elon_btns_bottom_p">
          Yuklanyotgan rasm o’lchami 1080x1080 hajmi 2 mb dan oshmasin
        </p>
      </div>
      <div className="elon_textarea_box">
        <p className="elon_textarea_p" placeholder="Mavzu matni">Mavzu matni</p>
        <textarea name="" id="" cols="30" rows="10" className="elon_textarea"></textarea>
      </div>

      <div className="elon_send_box">
        <button className="elon_send_btn">Bekor qilish</button>
        <button className="elon_send_btn">E’lonni yuborish</button>
      </div>
    </div>
  );
};
