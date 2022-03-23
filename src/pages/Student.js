import { useState, useEffect } from "react"
/**
 * useState -> digunakan untuk mendefinisikan state
 * useEffect -> sebuah fungsi uang dijalankan (dieksekusi) ketika
 * komponennya telah ditampilkan
 */
import { Modal } from "bootstrap";

export default function Student(props) {
    let [students, setStudents] = useState([])
    let [modalStudent, setModalStudent] = useState(null)
    let [id, setId] = useState(0)
    let [name, setName] = useState("")
    let [birthdate, setBirthdate] = useState("")
    let [action, setAction] = useState("")
    let [editId, setEditId] = useState(true)

    useEffect(() => {
        // inisiasi data array student
        let arrayStudents = [
            { id: 1, name: `GYue`, birthdate: `30 Oktober 2003` },
            { id: 2, name: `WDong`, birthdate: `1 Mei 2006` },
        ]
        setStudents(arrayStudents)

        // inisiasi state modalStudent
        setModalStudent(new Modal(document.getElementById(`modal_student`)))
    }, [])

    // function addStudent
    let addStudent = () => {
        // open modal
        modalStudent.show()

        // reset isi dari setiap inputan
        setId(0)
        setName("")
        setBirthdate("")
        setAction("insert")
        setEditId(true)
    }

    // function saveStudent
    let saveStudent = () => {
        // close modal
        modalStudent.hide()
        if (action === `insert`) {
            let newData = {
                id: id, name: name, birthdate: birthdate
            }

            // store array from student
            let temp = [...students]
            // add new data
            temp.push(newData)
            // store to students again
            setStudents(temp)
        } else if (action === `edit`) {
            // find index of selected data by ID
            let temp = [...students]

            // find index of selected data by ID
            let index = temp.findIndex(siswa => siswa.id === id)

            // update data based on founded index
            temp[index].name = name
            temp[index].birthdate = birthdate

            // restore to students from temp
            setStudents(temp)

        } else {

        }
    }

    let editStudent = siswa => {
        // open the modal
        modalStudent.show()
        setId(siswa.id)
        setName(siswa.name)
        setBirthdate(siswa.birthdate)
        setAction(`edit`)
        setEditId(false)
    }

    let deleteStudent = siswa => {
        if (window.confirm(`Are you sure`)) {
            // store array student to temp
            let temp = [...students]

            // find index pf selected data in array
            let index = temp.findIndex(sis => sis.id === siswa.id)

            // delete data from array based on founded index
            temp.splice(index, 1)

            // restore ke array student
            setStudents(temp)
        }
    }

    return (
        <div>
            <div className="card col">
                <div className="card-header bg-dark">
                    <h3 className="text-white text-center">List of My Student</h3>
                </div>
                <div className="card-body bg-secondary text-white ">
                    {/* 
                    .map() -> fungsi dari array untuk scanning setiap data dalam array
                    */}
                    {students.map(siswa => (
                        <div className="row" key={`key${siswa.id}`}>
                            <div className="col-2">
                                <small>ID</small>
                                <h5>{siswa.id}</h5>
                            </div>
                            <div className="col-4">
                                <small>Name</small>
                                <h5>{siswa.name}</h5>
                            </div>
                            <div className="col-4">
                                <small>Birthdate</small>
                                <h5>{siswa.birthdate}</h5>
                            </div>

                            <div className="col-2 mb-2">
                                <small>Action</small> <br />
                                {/* edit button */}
                                <button className="btn btn-primary mx-1"
                                    onClick={() => editStudent(siswa)}>
                                    Edit
                                </button>

                                {/* delete button */}
                                <button className="btn btn-danger mx-1"
                                    onClick={() => deleteStudent(siswa)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* button add data */}
                    <button className="btn btn-dark"
                        onClick={() => addStudent()}>
                        Add
                    </button>

                    {/* create dropdown using name */}
                    <select className="mx-2">
                        {students.map(item => (
                            <option value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>

                    {/* create radio button */}

                    {students.map(item => (
                        <div>
                            <input type={`radio`} name={`name`} value={item.id} />
                            <label>
                                {item.name}
                                (Tgl: {item.birthdate})
                            </label>
                        </div>
                    ))}

                    {/* modal component */}
                    <div className="modal" id="modal_student">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3>Form Student</h3>
                                </div>
                                <div className="modal-body">
                                    {/* input for ID, Nama, Birthdate */}
                                    ID
                                    <input type={`number`}
                                        className="form-control mb-2"
                                        value={id}
                                        onChange={ev => setId(ev.target.value)}
                                        readOnly={!editId} />
                                    {/* saat add student, editId = true
                                        
                                        saat edit student, editId = false
                                        oleh karena itu readOnly harus bernilai true*/}
                                    Name
                                    <input type={`text`}
                                        className="form-control mb-2"
                                        value={name}
                                        onChange={ev => setName(ev.target.value)} />
                                    Birthdate
                                    <input type={`text`}
                                        className="form-control mb-2"
                                        value={birthdate}
                                        onChange={ev => setBirthdate(ev.target.value)} />

                                    <button className="btn btn-info"
                                        onClick={() => saveStudent()}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* end of modal */}
                    </div>
                </div>
            </div>
        </div>
    )
}