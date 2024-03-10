const BoxDisplay = (props) => {
  const { boxes } = props
  console.log(boxes)

  const deleteBox = (e) => {
    console.log(e)
    e.target.parentElement.remove()
  }

  return (
    <>
      <h1>Boxes</h1>
      <div className="boxes">
        {
          boxes.map(box => {
            return (
              <>
                <div style={{ backgroundColor: box.color, width: +box.size, height: +box.size }} >
                  <button onClick={deleteBox} >X</button>

                </div>
              </>
            )
          })
        }
      </div>
    </>
  )

}
export default BoxDisplay
