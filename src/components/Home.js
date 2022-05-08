import "bootstrap/dist/css/bootstrap.min.css"; //import css boostrap

function Home() {
  return (
    <div>
      <h4>Welcome</h4>
      <ul>
        <li>
          <a onClick={()=> window.open("https://react-bootstrap.github.io/", "_blank")} href="https://react-bootstrap.github.io/" class="link-info">
            React Boostrap
          </a>
        </li>
        <li>
          <a onClick={()=> window.open("https://supabase.com/docs/", "_blank")} href="https://supabase.com/docs/" class="link-info">
            Firebase Supabase Docs
          </a>
        </li>
        <li>
          <a onClick={()=> window.open("https://app.supabase.io/", "_blank")}  href="https://app.supabase.io/" class="link-info">
            Firebase Supabase Config
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
