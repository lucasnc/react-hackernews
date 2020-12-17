import React, { useState, useEffect } from 'react';
import Parser from 'react-html-parser'; 
import api from '../../services/api';
import Fade from 'react-reveal/Fade';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { time } from '../../utils/timeConvert';
import Card from '../Card';
import CardBody from '../Card/components/CardBody';
import CardTag from '../Card/components/CardTag';
import CardText from '../Card/components/CardText';
import CardTitle from '../Card/components/CardTitle';
import CardLink from '../Card/components/CardLink';
import CardDetails from '../Card/components/CardDetails';
import { FaExternalLinkAlt } from 'react-icons/fa';



function StoryItem({ storyId }){
    const [story, setStory] = useState({});
    
    useEffect(() => {
        async function loadStory(){

            const { data } = await api.get(`item/${storyId}.json`);
            setStory(data)
            
        }
        loadStory()
    }, [storyId]);

    
    return (
        <SkeletonTheme color="var(--color-text-muted)" highlightColor="var(--color-text)">
            <Fade bottom cascade>
                <Card>
                    <CardBody>
                        <CardTitle>
                            {story.title || <Skeleton />}
                        </CardTitle>
                        { story.text && 
                            <CardText>
                                {Parser(story.text)}
                            </CardText>}
                        {story.type &&
                            <CardTag type={story.type}>
                                {story.type}
                            </CardTag>
                         || <Skeleton />}
                        <CardDetails>
                             {story.by && `by ${story.by}` || <Skeleton width={200}/>} • {story.time && `${time(story.time)} ago` || <Skeleton width={200}/>} 
                        </CardDetails>
                        
                        <CardLink target="_blank" rel="noopener noreferrer" href={story.url}>
                            Read article
                        <FaExternalLinkAlt />
                        </CardLink>
                    </CardBody>
                </Card>
            </Fade>
        </SkeletonTheme>
        
    )
}


export default StoryItem;