import React from "react";


const AddBook = () => {
    return(
        <div className="add-book">
            <h2>Add new Book</h2>
            <form>
                <input type="text" placeholder="Book title"></input>
                <input type="text" placeholder="Author"></input>
                <button>ADD BOOK</button>
            </form>
        </div>
    )
}

export default AddBook;