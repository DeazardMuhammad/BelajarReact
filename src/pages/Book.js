import { useState, useEffect } from "react";

import { Modal } from "bootstrap";

export default function Book(props) {
    let [books, setBooks] = useState([]);
    let [modalBook, setModalBook] = useState(null);
    let [id, setId] = useState(0);
    let [name, setName] = useState("");
    let [author, setAuthor] = useState("");
    let [publisher, setPublisher] = useState("");
    let [genre, setGenre] = useState("");
    let [img, setImg] = useState("")
    let [action, setAction] = useState("");
    let [editId, setEditId] = useState(true);

    useEffect(() => {
        // inisiasi data array book
        let arrayBooks = [
            {
                id: 1,
                name: `Soul Land`,
                author: `Tang Jian Shan Sao`,
                publisher: `WorldNovel`,
                genre: `Action, Fantasy, Romance, School Life, Comedy`,
                img: `https://i.pinimg.com/564x/d9/b5/3d/d9b53d81c04994ee818d812d525d099a.jpg`
            },
            {
                id: 2,
                name: `Soul Land 2`,
                author: `Tang Jian Shan Sao`,
                publisher: `WorldNovel`,
                genre: `Action, Fantasy, Romance, School Life, Comedy`,
                img: `https://i.pinimg.com/564x/03/a6/8a/03a68a8b03014512fcf4a6c37fda812a.jpg`
            },
            {
                id: 3,
                name: `Soul Land 3`,
                author: `Tang Jian Shan Sao`,
                publisher: `WorldNovel`,
                genre: `Action, Romance, School Life, Demon, Sci-fi, Tragedy, Comedy`,
                img: `https://i.pinimg.com/564x/f7/91/6e/f7916e38ad9405e7daba23b54ca9b626.jpg`
            },
            {
                id: 4,
                name: `Soul Land 4`,
                author: `Tang Jian Shan Sao`,
                publisher: `WorldNovel`,
                genre: `Action, Romance, School Life, Comedy, Sci-fi, `,
                img: `https://i.pinimg.com/564x/8d/d5/64/8dd564e1249dbac1df144461a8e11f0c.jpg`
            },
            {
                id: 5,
                name: `Soul Land 5`,
                author: `Tang Jian Shan Sao`,
                publisher: `WorldNovel`,
                genre: `Action, Fantasy, Romance, Tragedy`,
                img: `https://i.pinimg.com/564x/a0/9d/22/a09d2290986c386cb3a8bd76ee2f345e.jpg`
            },

        ]
        setBooks(arrayBooks)

        setModalBook(new Modal(document.getElementById(`modal_book`)))
    }, [])

    // function addBook
    let addBook = () => {
        // open modal
        modalBook.show()

        // reset isi dari setiap inputan
        setId(0)
        setName("")
        setAuthor("")
        setPublisher("")
        setGenre("")
        setAction("insert")
        setEditId(true)
    }

    // function save book
    let saveBook = () => {
        // close modal
        modalBook.hide()
        if (action === `insert`) {
            let newData = {
                id: id, name: name, author: author, publisher: publisher, genre: genre
            }

            // store array form book
            let temp = [...books]
            // add new data
            temp.push(newData)
            // store to student again
            setBooks(temp)
        } else if (action === `edit`) {
            // find index of selected data by ID
            let temp = [...books]

            // find index of selected data by ID
            let index = temp.findIndex(buku => buku.id === id)

            // update data based on founded index
            temp[index].name = name
            temp[index].author = author
            temp[index].publisher = publisher
            temp[genre].genre = genre

            // restore to books from temp
            setBooks(temp)
        } else {

        }
    }

    let editBook = buku => {
        // open the modal
        modalBook.show()
        setId(buku.id)
        setName(buku.name)
        setAuthor(buku.author)
        setPublisher(buku.publisher)
        setGenre(buku.genre)
        setAction(`edit`)
        setEditId(false)
    }

    let deleteBook = buku => {
        if (window.confirm(`Yakin ?`)) {
            // store array book to temp
            let temp = [...books]

            // find index of selected data in array
            let index = temp.findIndex(buk => buk.id === buku.id)

            // delete data from array based on founded index
            temp.splice(index, 1)

            // restore ke array book
            setBooks(temp)
        }
    }

    return (
        <div>
            <div className="card col">
                <div className="card-header bg-dark">
                    <h3 className="text-white text-center">List Of My Book</h3>
                </div>

                <div className="card-body bg-secondary">
                    {/* map -> gunanya untuk scanning setiap data dalam array */}
                    {books.map(buku => (
                        <div className="row" key={`key${buku.id}`}>
                            <div className="card mb-5" style={{ width: `20rem` }}>
                                <img className="card-img-left" src={buku.img} />
                            </div>
                            <div className="col">
                                <small>ID</small>
                                <h5>{buku.id}</h5>
                            </div>
                            <div className="col">
                                <small>Name</small>
                                <h5>{buku.name}</h5>
                            </div>
                            <div className="col">
                                <small>Author</small>
                                <h5>{buku.author}</h5>
                            </div>
                            <div className="col">
                                <small>Publisher</small>
                                <h5>{buku.publisher}</h5>
                            </div>
                            <div className="col">
                                <small>Genre</small>
                                <h5>{buku.genre}</h5>
                            </div>
                            <div className="col mb-2">
                                <small>Action</small><br></br>
                                {/* edit */}
                                <button className="btn btn-primary mx-1 mb-2"
                                    onClick={() => editBook(buku)}>
                                    Edit
                                </button>

                                {/* delete */}
                                <button className="btn btn-danger mx-1"
                                    onClick={() => deleteBook(buku)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* button add data */}
                    <button className="btn btn-dark"
                        onClick={() => addBook()}>
                        Add Book
                    </button>

                    {/* modal component */}
                    <div className="modal" id="modal_book">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3>Form Book</h3>
                                </div>

                                <div className="modal-body">
                                    {/* input for id, name, author, publisher, genre */}
                                    ID
                                    <input type={`number`}
                                        className="form-control mb-2"
                                        value={id}
                                        onChange={ev => setId(ev.target.value)}
                                        readOnly={!editId}
                                    />
                                    {/* saat add book, editId = true
                                        saat edit book, editId = false 
                                        oleh karena itu readonly harus bernilai true
                                    */}

                                    Name
                                    <input type={`text`}
                                        className="form-control mb-2"
                                        value={name}
                                        onChange={ev => setName(ev.target.value)}
                                    />

                                    Author
                                    <input type={`text`}
                                        className="form-control mb-2"
                                        value={author}
                                        onChange={ev => setAuthor(ev.target.value)}
                                    />

                                    Publisher
                                    <input type={`text`}
                                        className="form-control mb-2"
                                        value={publisher}
                                        onChange={ev => setPublisher(ev.target.value)}
                                    />

                                    Genre
                                    <input type={`text`}
                                        className="form-control mb-2"
                                        value={genre}
                                        onChange={ev => setGenre(ev.target.value)}
                                    />

                                    <button className="btn btn-info"
                                        onClick={() => saveBook()}>
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