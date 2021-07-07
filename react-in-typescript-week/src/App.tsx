import React from 'react';
// Api
import { fetchCharacter } from './api';
// Components
import Card from './components/Card';
import Item from './components/Item';
// Types
import { Character } from './api';
// Context hook
import { useCharacterId } from './context'

// Styles
import { Wrapper } from './App.styles';

const App: React.FC = () => {
  const [character, setCharacter] = React.useState<Character>({} as Character);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // const [characterId, setCharacterId] = React.useState(1);
  const { characterId, setCharacterId } = useCharacterId();

  React.useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);
      const result = await fetchCharacter(characterId);
      console.log(result)
      setIsLoading(false);
      setCharacter(result);
    };
    fetchFromApi();
  }, [characterId])
  
  const inputRef = React.useRef<HTMLInputElement>(null); // Must Initialize with null

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(e.currentTarget);
    // setCharacterId(Math.floor(Math.random()*10) + 1)
    setCharacterId(Number(inputRef.current?.value)) // Use Optional Chaining
  }

  return (
    <Wrapper characterId={characterId}>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <Card name={character.name} imgUrl={character.img_url} gender={character.gender}/>
          <Item item={character} onClick={(item) => console.log(item.origin)} />
          <input type="text" ref={inputRef} />
          <button onClick={handleBtnClick}>Get Character</button>
        </>
      )}
      
    </Wrapper>
  );
};

export default App;
