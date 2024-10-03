export const FormHome: React.FC = () => {
  return (
    <>
      <div className="form-component">
        <form className="form-container">
          <input type="text" placeholder="entrez le titre d'un film" />
          <input type="submit" value={"rechercher"} />
        </form>
        <div className="btn-sort-container">
          <span id="goodToBad">Top ↑</span>

          <span id="badToGood">↓ Flop</span>
        </div>
      </div>
    </>
  );
};
