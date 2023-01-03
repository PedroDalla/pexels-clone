import styled from 'styled-components'

export const StyledContentVisualizer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    width: 100%;
    height: 100%;

    background: rgba(0,0,0,0.9);

    overflow: auto;

    #outer-controls{
        height: 4rem;
        padding: 20px;
        display: flex;
        justify-content: left;
        align-items: center;
        
        #close-popup-btn{
            background: transparent;
            outline: none;
            cursor: pointer;
            border: none;
            padding: 0;
            
            svg{
                color: #dddddd;
                transition: 0.1s ease-in;
            }

            &:hover {
                svg {
                    color: white;
                }
            }
        }
    }

    #popup{
        position: relative;
        margin: 0 auto;
    
        min-height: 600px;
        max-width: calc(100vw - 300px);

        padding: 15px;
        border-radius: 10px;

        background: white;
        
        #popup-header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px;

            #header-info{
                display: flex;
                flex-direction: row;

                #author-image{
                    img{ 
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        cursor: pointer;
                        transition: 0.1s ease-in;
                        
                        &:hover{
                            filter: brightness(0.8);
                        }
                    }
                    margin-right: 10px;
                }

                #author-info{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    font-family: "Poppins";

                    div{
                        transition: 0.1s ease-in;
                    }

                    #author-title{
                        a{
                            text-decoration: none;
                            color: #2c343e;
                            font-size: 17px;
                            font-weight: 600;
                            transition: 0.1s ease-in;
                        }

                        &:hover{
                            a{
                                color: black;
                            }
                        }
                    }

                    #follow-btn{
                        font-size: 16px;
                        color: #7f7f7f;
                        background: transparent;
                        border: none;
                        outline: none; 
                        font-weight: 600;
                        padding: 0;

                        &:hover{
                            color: #6b6b6b;
                            cursor: pointer;
                        }
                    }
                }
            }

            #header-buttons{
                display: flex;

                button{
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 16px;
                color: #000;
                outline: none;
                background: white;
                border: 1px solid;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                padding: 12px 25px;
                border-color: #dfdfe0;
                transition: 0.1s ease-in;

                svg{
                    fill: #4a4a4a;
                    margin-right: 8px;
                    transition: 0.1s ease-in;
                }

                #like-count{
                    margin-left: 8px;
                    font-size: 14px;
                    color: #bfbfbf;
                }

                &:not(:last-child){
                    margin-right: 10px;
                }

                &:hover{
                    border-color: #bcbcbc;
                    cursor: pointer;

                    svg{
                        fill: #727272;
                    }
                }

                &#download-btn{
                    border: 0;
                    color: #fff;
                    margin: 0;
                    background: #05a081;
                    border-right: 1px solid #04876d;
                    border-radius: 6px 0 0 6px;

                    &:hover{
                        background:#0c8e74;
                        cursor: pointer;
                    }
                }

                &#download-options-btn{
                    border: 0;
                    color: #fff;
                    padding: 10px 10px;
                    background: #05a081;
                    border-radius: 0 6px 6px 0;
                    font-size: 18px;

                    svg{
                        fill: white;
                        margin: 0;
                    }

                    &:hover{
                        background:#0c8e74;
                        cursor: pointer;
                    }
                }
            }
        }
    }   

        #popup-content{
            display: flex;
            justify-content: center;
            overflow: hidden;

            #image-container{
                max-width: calc(50vh);
                max-height: 80vh;
                min-height: 300px;

                img{
                    cursor: zoom-in;
                    transition: transform .1s ease;
                    max-height: 100%;
                    margin-top: 20px;
                    max-width: 100%;
                }
            }
        }
    }
`