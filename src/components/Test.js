function Test(props) {
    return (
        <div className="row ">
            {/* bagian gambar */}
            <div className="col-3 mb-5">
                {/* load image */}
                <img className="img img-rounded"
                    src={props.avatar} alt="Gambar"
                    style={{ width: `20rem` }} />
            </div>

            {/* bagian kedua */}
            <div className="col-4" align="left">
                <h5 className="text-info">Nama:</h5>
                <h3>{props.name}</h3>

                <h5 className="text-info">Tgl. Lahir:</h5>
                <h3>{props.tgl_lahir}</h3>

                <h5 className="text-info">Gender:</h5>
                <h3>{props.gender}</h3>
            </div>

            {/* bagian ketiga */}
            <div className="col-4" align="left">
                <h5 className="text-info">Email:</h5>
                <h3>{props.email}</h3>

                <h5 className="text-info">Telepon:</h5>
                <h3>{props.telepon}</h3>

                <h5 className="text-info">Devisi:</h5>
                <h3>{props.divisi}</h3>
            </div>
        </div>
    )
}
export default Test