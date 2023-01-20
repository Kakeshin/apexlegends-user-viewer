const Page = () => {
  return (
    <div>
      <div className='wrapper'>
        <h1>Apex Legends User Info</h1>
        <div className='container'>
          <h2>必須パラメータ</h2>
          <div>
            <form method='get' action='/result'>
              <div>
                <label>Platform</label>
                <input type='text' name='platform' />
              </div>
              <div>
                <label>User Name</label>
                <input type='text' name='userName' />
              </div>
              <div>
                <input type='submit' value='Search' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
