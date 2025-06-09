import Column from './Column';

const columns = [
    {
        id: 1,
        title: "Columna 1"
    },
    {
        id: 2,
        title: "Columna 2"
    },
    {
        id: 3,
        title: "Columna 3"
    }
]

function Layout() {
  return (
    <div className='grid grid-cols-3'>
        {
            columns.map((col)=>(
                <Column key={col.id} content={col}></Column>
            ))
        }
    </div>
  )
}

export default Layout;
