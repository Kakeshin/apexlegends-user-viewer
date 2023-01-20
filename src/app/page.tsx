const Page = () => {
  return (
    <div>
      <div className="wrapper">
        <h1>Apex Legends User Info</h1>
        <div className="container">
          <h2>必須パラメータ</h2>
          <div>
            <form method="post" action="/api/apex-legends/status">
              <div>
                <label>Api Key</label>
                <input type="text" name="api-key" />
              </div>
              <div>
                <label>Platform</label>
                <input type="text" name="platform" />
              </div>
              <div>
                <label>User Name</label>
                <input type="text" name="user-name" />
              </div>
              <div>
                <input type="submit" value="Search" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
