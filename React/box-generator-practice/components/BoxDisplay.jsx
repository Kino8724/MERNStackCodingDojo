const BoxDisplay = (props) => {
  const { boxes } = props
  console.log(boxes)
  return (
    <>
      <h1>Boxes</h1>
      <div className="boxes">
        {
          boxes.map(box => {
            return (
              <>
                <div style={{ backgroundColor: box.color, width: +box.size, height: +box.size }} />
              </>
            )
          })
        }
      </div>
    </>
  )

}
export default BoxDisplay
