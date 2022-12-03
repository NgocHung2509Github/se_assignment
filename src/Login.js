export default function Login () {
    return (
        <div class="login-back">
            <form>
                <div class="container">
  	                <h2 className="Login-box-name">UWC 2.0</h2>
                    <label><b>E-mail</b></label>
                    <input type="text" placeholder="Nhập e-mail" required/>
                    <label><b>Mật Khẩu</b></label>
                    <input type="password" placeholder="Nhập mật khẩu" required/>
        
                    <button class = "login-btn" type = "submit"><a href = "/home">Đăng nhập</a></button>
                </div>
            </form>
        </div>
    );
}