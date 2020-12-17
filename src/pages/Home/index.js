import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import StoryItem from '../../components/StoryItem';
import Container from '../../components/Container';
import '../../../src/assets/styles/global.css';
import Button from '../../components/Button';
import { FaRedoAlt } from 'react-icons/fa';

function Home() {

  const [stories, setStory] = useState([]);
  const [count, setCount] = useState(5);
  
  useEffect(() => {

    async function loadStories() {

      const { data } = await api.get('/topstories.json');
      setStory(data);
      
    }
    
    loadStories();
  }, []);

  return (
    <Container>
            {stories.slice(0, count).map(id => (
                    <StoryItem key={id} storyId={id}/>
                    ))}
        <Button onClick={() => setCount(count + 5)}>
          Load more
          <FaRedoAlt />
        </Button>
    </Container>
  );
}

export default Home;
