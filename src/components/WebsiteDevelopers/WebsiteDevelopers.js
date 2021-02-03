import React from 'react'
import WebsiteDeveloper from './WebsiteDeveloper/WebsiteDeveloper';


class WebsiteDevelopers extends React.Component {
    state = {
        developers : [
            {id: '1',
                img: 'https://picsum.photos/500/450' ,
                name : 'Maria Alzu\'bi' ,
                position : 'Maria Alzu\'bi' ,
                description : 'Maria Alzu\'bi' ,
                facebook :'https://www.facebook.com/maria.alzoubi.5/' ,
                linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' ,
                gitHub : 'https://github.com/Marya-Alzubi' },
            {id: '2',
                img: 'https://picsum.photos/500/450' ,
                name : 'Maria Alzu\'bi' ,
                position : 'Maria Alzu\'bi' ,
                description : 'Maria Alzu\'bi' ,
                facebook :'https://www.facebook.com/maria.alzoubi.5/' ,
                linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' ,
                gitHub : 'https://github.com/Marya-Alzubi' },
            {id: '3',
                img: 'https://picsum.photos/500/450' ,
                name : 'Maria Alzu\'bi' ,
                position : 'Maria Alzu\'bi' ,
                description : 'Maria Alzu\'bi' ,
                facebook :'https://www.facebook.com/maria.alzoubi.5/' ,
                linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' ,
                gitHub : 'https://github.com/Marya-Alzubi' },
        ],
        showStudents : true,
    }

    render() {
        return(

            <div>
                <figure className="snip1515">
                {this.state.developers.map((developer, index) => {
                    return <WebsiteDeveloper
                        img={developer.img}
                        name={developer.name}
                        position={developer.position}
                        description={developer.description}
                        facebook={developer.facebook}
                        linkedin={developer.linkedin}
                        github={developer.gitHub}
                    />
                })}
                </figure>
            </div>

        )
    }}
export default  WebsiteDevelopers;









