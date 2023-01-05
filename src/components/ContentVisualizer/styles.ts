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

        @media (max-width: 920px){
            max-width: calc(100vw - 150px);
        }

        @media (max-width: 660px){
            max-width: 100%;
        }

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
                fill: #595959;
                margin-right: 8px;
                transition: 0.1s ease-in;
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


        }
        
        #popup-header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px;
            white-space: nowrap;
            background: white;

            @media (max-width: 920px){
                position: sticky;
                top: 0;
            }

            #author-info{
                display: flex;
                flex-direction: row;
                overflow: hidden;

                &.hide-mobile{
                    @media (max-width: 920px){
                        display: none;
                    }
                }

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
                }

                #author-details{
                    font-family: "Poppins";
                    margin: 0 15px;
                    overflow: hidden;

                    div{
                        transition: 0.1s ease-in;
                    }

                    #author-title{
                        a{
                            display: block;
                            text-decoration: none;
                            color: #2c343e;
                            font-size: 17px;
                            font-weight: 600;
                            transition: 0.1s ease-in;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }

                        &:hover{
                            a{
                                color: black;
                            }
                        }
                    }

                    #follow-btn{
                        overflow: hidden;
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

            .header-buttons{
                display: flex;

                &.show-mobile{
                    @media (min-width: 920px){
                        display: none;
                    }

                    button{
                        padding: 15px;

                        svg{
                            margin: 0;
                        }
                    }
                }

                &.hide-mobile{
                    @media (max-width: 920px){
                        display: none;
                    }
                }


                button{
                
                #like-count{
                    margin-left: 8px;
                    font-size: 14px;
                    color: #bfbfbf;
                }

                &.download-btn{
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

                &.download-options-btn{
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

            margin-bottom: 15px;

            #image-container{
                max-width: calc(50vh);
                max-height: 80vh;
                min-height: 300px;
                margin-top: 20px;

                @media (max-width: 920px){
                    max-width: 100%;
                    max-height: 100%;
                }

                img{
                    cursor: zoom-in;
                    transition: transform .1s ease;
                    max-height: 100%;
                    max-width: 100%;
                    margin: 0 auto;

                    @media (max-width: 920px){
                    }
                }
            }
        }

        #image-footer{
            display: flex;
            justify-content: space-between;
            font-family: "Poppins";

            #free-use-btn{
                color: #7f7f7f;
                font-size: 15px;
                background: transparent;
                display: flex;
                align-items: center;
                padding: 0 5px;
                text-decoration: none;

                
                border: none;
                outline: none;

                >svg{
                    margin-right: 5px;
                }

                &:hover{
                    color: #5e5d5d;
                }

            }

            #image-footer-controls{
                display: flex;
                
                button{
                    svg{
                        margin-right: 5px;
                    }

                    span{
                        @media (max-width: 920px){
                            display: none;
                        }
                    }
                }

                #more-info-btn{
                    margin-right: 10px;
                }
            }
        }

        #author-panel{
            display: flex;
            justify-content: space-between;
            margin-top: 3rem;

            @media (min-width: 920px){
                display: none;
            }

            #author-info-mobile{
                display: flex;
                flex-direction: row;
                overflow: hidden;

                #author-image-mobile{
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
                }

                #author-title-mobile{
                    transition: 0.1s ease-in;
                    font-family: "Poppins";
                    margin-left: 15px;
                    display: flex;
                    align-items: center;

                    a{
                        display: block;
                        text-decoration: none;
                        color: #2c343e;
                        font-size: 18px;
                        font-weight: 500;
                        transition: 0.1s ease-in;
                        white-space: nowrap;
                    }

                    &:hover{
                        a{
                            color: black;
                        }
                    }
                }
            }

            #author-mobile-controls{
                display: flex;

                #follow-mobile-btn{
                    >svg{
                        margin: 0;
                    }
                }

                #donate-mobile-btn{
                    color: white;
                    background-color: #283039;

                    &:hover{
                        background-color: #1e262d;
                    }
                }

            }
        }
    }

    
`