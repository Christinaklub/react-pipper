import react, { useState } from "react";
import PipItem from "./PipItem";
import { Pip } from "../entities/pip";
import ReactModal from "react-modal";


export function CreatePip(){
    const [content, setContent] = useState('');
    const [isOpen, setIsOpen] = useState (false);

    // laver et object der indeholder en masse data ift. text og farve på pip post
    const pipDummyData= [ 
        new Pip('Håber det her virker', new Date(), 1),
        
        {
            content: 'Hvis det ikke virker bliver jeg meget ked af det',
            isCompleted: true, 
            created: new Date(),
            priority: 1,
        },
        {
            content: 'Jeg er sku lidt træt',
            isCompleted: true, 
            created: new Date(),
            priority: 2, 
        }
    ];

    const [pips, setPips] = useState(pipDummyData);

    const handlePipContentChange = (e) => {
        setContent(e.target.value)
    }

    const handleAddPipClick = () => {
        // Opretter nyt todo objekt for at tilføje det til array'et af todos.
        // Hardcoded "dummy" deadline 2024-01-01, priority 1, labels []
        const newPip = new Pip(content, new Date(), 1)
    
        // kalde setTodos og sende det tidligere todos array + mit nye todo obj. ind.
        
        // oprette et nyt array, indsætte todos objekter, tilføjer den den nye todo
        // kalder setTodos med det nye todos array som parameter.
        // google js-spread operator
        setPips([...pips, newPip]) 

        handleCloseModal()
      }

      function handleOpenModal(){
        setIsOpen(true)
      }
      function handleCloseModal(){
        setIsOpen(false)
      }


      return(
        <main>

        <div className="list">
          <div className="add-container">
          <ReactModal isOpen={isOpen}> 
                <input className="pipInput" type="text" placeholder="What's on your mind?" value={content} onChange={handlePipContentChange}/>
                <button className="add-button" onClick={handleCloseModal}>Close</button>
                <button className="add-button" onClick={handleAddPipClick}>Pip</button>
            </ReactModal>

            <h2 className="home">Home</h2>
            <button className="add-button" onClick={handleOpenModal}>Pip</button>
          </div>
          {/* Vi sender data ind i todoItem via Props og kalder den content */}
          {pips.map(pip => {
            // key={todo.content} burde være et unikt id
            return <PipItem key={pip.content} pipItem={pip}/>
          })}
        </div>
      </main>
      )
}