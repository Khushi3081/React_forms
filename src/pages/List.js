// import React from "react"

// function List() {
//     const userInfo = JSON.parse(localStorage.getItem("data"))
//     const [userData, setUserData] = useState(userInfo)
//     const [currentPage, setCurrentPage] = useState(1)
//     const [perPage, serPerPage] = useState(3)
//     // const [search, setSearch] = useState([])
//     // const [sort, setSort] = useState({ order: true })
//     const offset = (currentPage - 1) * perPage
//     let totalPage = Math.ceil(userData.length / perPage)
//     let record = Number(perPage) + Number(offset)
//     let data = userData.slice(offset, record)
//     function page(e) {
//         let changePage = e.target.value
//         serPerPage(changePage)
//     }
//     return <div></div>
// }

// export default List
