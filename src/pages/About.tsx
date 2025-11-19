// src/pages/Home/HomePage.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

export default function About() {

    return (
        <>
            <section
                className="py-5 text-center position-relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(rgba(0,100,0,0.75), rgba(0,100,0,0.85)), url('/images/nem-chua.jpg.webp') center/cover no-repeat fixed",
                    minHeight: "400px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className="container position-relative z-1">
                    <h1 className="display-5 fw-bold text-white mb-3">
                        Giới thiệu về chúng tôi
                    </h1>
                    <p className="text-white-50 fs-5">
                        <Link to="/" className="text-white-50 text-decoration-none">
                            Trang chủ
                        </Link>
                        <i className="bi bi-chevron-right mx-2"></i>
                        Giới Thiệu
                    </p>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center g-5">
                        {/* Cột trái - Text */}
                        <div className="col-lg-6">
                            <h2 className="text-success fw-bold mb-4 position-relative d-inline-block">
                                Giới thiệu về chúng tôi
                                <span
                                    className="position-absolute start-0 top-50 translate-middle-y border-start border-5 border-success"
                                    style={{ height: "60px", left: "-15px" }}
                                ></span>
                            </h2>

                            <p className="lead text-muted mb-4">
                                Nem chua Phương Chi Lê là thương hiệu nem chua truyền thống được làm hoàn toàn
                                thủ công tại Thanh Hóa, do chính chị Phương Chi Lê – một người con xứ Thanh sinh ra
                                và lớn lên cùng hương vị nem chua gia truyền – trực tiếp làm chủ và chế biến.
                            </p>

                            <h4 className="text-success fw-bold mt-5 mb-3">
                                Lịch sử ra đời thương hiệu Nem Chua Phương CHi Lê
                            </h4>
                            <p className="text-muted">
                                LỊCH SỬ RA ĐỜI THƯƠNG HIỆU NEM CHUA PHƯƠNG CHI LÊ
                                “Một chiếc nem nhỏ – cả một hành trình dài của tình yêu và niềm tự hào xứ Thanh”
                                Năm 2015, chị Phương Chi Lê – khi ấy vẫn đang làm nhân viên văn phòng ở Hà Nội – nhận được tin mẹ ở quê bị ốm nặng. Chị xin nghỉ phép về quê chăm mẹ. Trong những ngày bên giường bệnh, mẹ cứ nhắc mãi:
                                “Con ơi, mẹ thèm nem chua nhà mình quá… nhưng giờ mẹ yếu không gói được nữa.”
                                Câu nói ấy như gieo một hạt giống trong lòng Chi Lê. Chị xin nghỉ việc luôn, quyết định về quê học lại công thức nem chua gia truyền từ mẹ và bà ngoại – công thức đã có từ thời cụ cố, chỉ truyền cho con gái trưởng trong nhà.
                                Ban đầu chị chỉ gói vài chục chiếc để biếu người thân, bạn bè cũ. Ai ăn cũng khen:
                                “Nem này đúng vị ngày xưa, chớ không phải nem công nghiệp đâu! Sao mày không làm bán đi?”
                                Thế là năm 2016, lò nem đầu tiên ra đời trong chính căn bếp cũ của gia đình ở phường Đông Sơn, TP. Thanh Hóa, với vỏn vẹn 3 người: chị Lê, mẹ và em trai. Ngày ấy mỗi ngày chỉ gói được 15–20kg thịt, bán cho bà con trong xóm và ship đi Hà Nội bằng xe khách.
                                Đến năm 2018, một khách hàng ở Sài Gòn ăn thử rồi đặt luôn 300kg làm quà biếu Tết. Đơn hàng lớn đầu tiên ấy khiến cả nhà thức trắng 5 ngày 5 đêm để gói, nhưng cũng từ đó cái tên “Nem chua Phương Chi Lê” bắt đầu được nhắc đến nhiều hơn.
                                Năm 2020, chị quyết định đặt tên chính thức thương hiệu là Nem chua Phương Chi Lê – lấy nguyên tên khai sinh của mình, như một lời hứa sẽ giữ trọn cái tâm và cái tình của người làm nem xứ Thanh.
                            </p>
                        </div>


                        <div className="col-lg-6">



                                    <div className="bg-success text-white rounded-4 p-4 position-relative">
                                        {/* Viền trang trí 4 góc */}
                                        <div className="position-absolute top-0 start-0 border-top border-start border-white border-5 rounded-top" style={{ width: "50px", height: "50px" }}></div>
                                        <div className="position-absolute top-0 end-0 border-top border-end border-white border-5 rounded-top" style={{ width: "50px", height: "50px" }}></div>
                                        <div className="position-absolute bottom-0 start-0 border-bottom border-start border-white border-5 rounded-bottom" style={{ width: "50px", height: "50px" }}></div>
                                        <div className="position-absolute bottom-0 end-0 border-bottom border-end border-white border-5 rounded-bottom" style={{ width: "50px", height: "50px" }}></div>
                                        <div className="p-4 pt-7 text-center">
                                            <img
                                                src="/images/Admin.jpg"
                                                alt="Phương Chi Lê"
                                                className="rounded-circle shadow mb-4"
                                                style={{ width: "20%", height: "20%", objectFit: "cover" }}
                                            />
                                        <h5 className="fw-bold mb-1">Kính gửi Quý khách hàng</h5>
                                        <p className="small lh-lg">

                                            Lời đầu tiên, Phương Chi Lê xin gửi lời cảm ơn chân thành nhất đến anh chị đã luôn tin tưởng, yêu mến và đồng hành cùng Nem chua Phương Chi Lê suốt thời gian qua.
                                            Tôi vốn là con gái đất Thanh Hóa, lớn lên cùng mùi thơm nồng nàn của những mẻ nem mẹ và bà gói ngày Tết, ngày giỗ. Với tôi, nem chua không chỉ là món ăn, mà là cả một bầu trời ký ức: vị chua dịu của lên men tự nhiên, vị cay tê đầu lưỡi, thơm lừng lá ổi, lá đinh lăng, và cái giòn sần sật của bì heo tươi… Tất cả như gói trọn cái hồn quê vào từng chiếc nem nhỏ xinh.
                                            Chính vì tình yêu ấy, tôi đã quyết định mang nem chua gia truyền nhà mình ra ngoài kia, để những người con xa quê vẫn được ăn đúng vị tuổi thơ, để anh chị ở khắp nơi cũng được thử một lần cái “đã” khó tả của nem chua Thanh Hóa chính gốc. Mỗi ngày, tôi và đội ngũ vẫn tỉ mỉ chọn thịt nóng trong ngày, gia vị sạch, gói tay, ủ đúng ngày… chỉ để giữ trọn cái hồn và cái tình trong từng chiếc nem mang tên Phương Chi Lê.
                                            Cảm ơn anh chị đã cho tôi cơ hội mang chút hương vị quê nhà đến bàn ăn của gia đình mình.
                                            <br /><br />
                                            Mong rằng mỗi lần mở gói nem là một lần anh chị mỉm cười nhớ về những điều thật giản dị mà thật quý.
                                            Trân trọng & yêu thương gửi đến anh chị.
                                        </p>
                                    </div>

                                    <p className="text-end mt-3 mb-0 text-success fw-bold">
                                        Phương Chi Lê
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== PHẦN 2: Message bên phải (chỉ hiện ở đoạn đầu thôi) ==================== */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-start g-5">
                        <div className="col-lg-7">
                            <p className="lead text-muted">
                                Và thế là thương hiệu Nem chua Phương Chi Lê đã chính thức ra đời, với khát vọng gìn giữ trọn vẹn và lan tỏa hương vị nem chua Thanh Hóa chuẩn vị gia truyền đến mọi miền đất nước, thậm chí là ra thế giới.
                                Với tình yêu mãnh liệt dành cho món ăn quê hương, cùng cái “tâm” và cái “tình” của người con xứ Thanh, Phương Chi Lê không chỉ muốn giữ lại công thức cổ của mẹ, của bà, mà còn mong một ngày thật gần đây, người người, nhà nhà, từ Bắc vào Nam, từ Việt kiều xa xứ đến bạn bè quốc tế, đều được một lần cắn miếng nem chua chính gốc, để cảm nhận được cái chua dịu, cái cay tê, cái thơm nồng và cái giòn sần sật mà chỉ Thanh Hóa mới có.
                            </p>

                            <h3 className="text-success fw-bold mt-5 mb-4">Tầm nhìn</h3>
                            <p className="text-muted mb-4">
                                Bằng tất cả niềm tự hào của người con xứ Thanh, cùng với cái TÂM giữ trọn vị cổ truyền và cái TẦM đưa đặc sản quê hương vươn xa,
                                Nem chua Phương Chi Lê đang từng ngày nỗ lực để trở thành thương hiệu hàng đầu Việt Nam chuyên mang đến nem chua Thanh Hóa chuẩn vị gia truyền – sạch, ngon, và đậm đà tình quê nhất.
                                Không chỉ dừng lại ở một món ăn, chúng tôi mong muốn mỗi chiếc nem mang tên Phương Chi Lê sẽ là niềm tự hào của người Thanh Hóa, là niềm vui của người Việt khắp nơi, và là cầu nối đưa hương vị Việt ra thế giới.
                                Hành trình ấy còn rất dài, nhưng chỉ cần còn một đích đến duy nhất:
                                Nem chua Phương Chi Lê – Thương hiệu nem chua Thanh Hóa được yêu thích bậc nhất Việt Nam, có mặt trong mọi bữa cơm, mọi món quà biếu, và trong trái tim của hàng triệu người Việt.
                                Cùng nhau, chúng ta sẽ làm nên điều đó.
                                Với tất cả tình yêu và niềm tin,
                                Phương Chi Lê & thương hiệu Nem chua Phương Chi Lê ❤️
                            </p>

                            <p className="text-muted mb-3">Với tiêu chí:</p>
                            <ul className="list-unstyled text-muted ps-4">
                                <li className="mb-2">• Nguyên liệu sạch, nguồn gốc rõ ràng</li>
                                <li className="mb-2">• Quy trình sản xuất tuân thủ 5S của Nhật Bản</li>
                                <li className="mb-2">• Hương vị truyền thống chuẩn vị xứ Thanh</li>
                                <li className="mb-2">• <strong>KHÔNG</strong> chất bảo quản, phụ gia, tạo màu</li>
                                <li className="mb-2">• Tôn vinh ẩm thực Việt</li>
                            </ul>

                            <h4 className="text-success fw-bold mt-5">Sứ mệnh của thương hiệu Nem Thanh</h4>
                            <p className="text-muted">
                                Mang đến cho khách hàng những sản phẩm nem chua Thanh Hóa an toàn, chất lượng cao nhất,
                                giữ trọn hương vị truyền thống và góp phần quảng bá đặc sản quê hương ra toàn quốc.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}
