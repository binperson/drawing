function threeStart() {
    var initOption = {
        antialias: true,
        showHelpGrid: false,
        clearCoolr: 0xFFFFFF
    }

    drawingstation = new drawing3D();
    var Aobjects = {
        objects: [
            //地板
            {
                show: true,
                uuid: "",
                name: 'floor',
                objType: 'floor',
                length: 2000,
                width: 1600,
                height: 10,
                rotation: [{ direction: 'x', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                x: 0,
                y: 0,
                z: 0,
                style: {
                    skinColor: 0x8ac9e2,
                    skin: {
                        skin_up: {
                            skinColor: 0x98750f,
                            imgurl: "../img/floor.jpg",
                            repeatx: true,
                            repeaty: true,
                            width: 128,
                            height: 128
                        },
                        skin_down: {
                            skinColor: 0x8ac9e2,
                        },
                        skin_fore: {
                            skinColor: 0x8ac9e2,
                        }
                    }
                }
            },
            //墙体
            {
                show: true,
                uuid: "",
                name: 'wall',
                objType: 'wall',
                thick: 20,
                length: 100,
                height: 240,
                wallData: [
                    {//wall1
                        uuid: "",
                        name: 'wall1',
                        thick: 20,
                        height: 240,
                        skin: {
                            skin_up: {
                                skinColor: 0xdddddd,
                            },
                            skin_down: {
                                skinColor: 0xdddddd,
                            },
                            skin_fore: {
                                skinColor: 0xb0cee0,
                            },
                            skin_behind: {
                                skinColor: 0xb0cee0,
                            },
                            skin_left: {
                                skinColor: 0xdeeeee,
                            },
                            skin_right: {
                                skinColor: 0xb0cee0,
                            }
                        },
                        startDot: {
                            x: -500,
                            y: 120,
                            z: -350
                        },
                        endDot: {
                            x: 500,
                            y: 120,
                            z: -350
                        },
                        rotation: [{ direction: 'x', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                        childrens: [
                            {
                                op: '-',
                                show: true,
                                uuid: "",
                                name: 'doorhole',
                                objType: 'doorhole',
                                thick: 20,
                                height: 220,
                                startDot: {
                                    x: -410,
                                    y: 110,
                                    z: -350
                                },
                                endDot: {
                                    x: -190,
                                    y: 110,
                                    z: -350
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xffdddd,
                                    },
                                    skin_down: {
                                        skinColor: 0xdddddd,
                                    },
                                    skin_fore: {
                                        skinColor: 0xffdddd,
                                    },
                                    skin_behind: {
                                        skinColor: 0xffdddd,
                                    },
                                    skin_left: {
                                        skinColor: 0xffdddd,
                                    },
                                    skin_right: {
                                        skinColor: 0xffdddd,
                                    }
                                },
                            },
                            {
                                op: '-',
                                show: true,
                                uuid: "",
                                name: 'windowHole',
                                objType: 'windowHole',
                                thick: 20,
                                height: 160,
                                startDot: {
                                    x: -50,
                                    y: 130,
                                    z: -350
                                },
                                endDot: {
                                    x: 450,
                                    y: 130,
                                    z: -350
                                }
                            },
                            {
                                show: true,
                                name: 'windowCaseBottom',
                                uuid: "",
                                objType: 'cube',
                                thick: 30,
                                height: 10,
                                startDot: {
                                    x: -50,
                                    y: 50,
                                    z: -350
                                },
                                endDot: {
                                    x: 450,
                                    y: 50,
                                    z: -350
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_down: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_fore: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_behind: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_left: {
                                        skinColor: 0xd0eef0,
                                    },
                                    skin_right: {
                                        skinColor: 0xd0eef0,
                                    }
                                },
                            },
                            {
                                show: true,
                                uuid: "",
                                name: 'doorCaseRight',
                                objType: 'cube',
                                thick: 24,
                                height: 220,
                                startDot: {
                                    x: -410,
                                    y: 110,
                                    z: -350
                                },
                                endDot: {
                                    x: -405,
                                    y: 110,
                                    z: -350
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_down: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_fore: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_behind: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_left: {
                                        skinColor: 0xd0eef0,
                                    },
                                    skin_right: {
                                        skinColor: 0xd0eef0,
                                    }
                                },
                            },
                            {
                                show: true,
                                name: 'doorCaseLeft',
                                uuid: "",
                                objType: 'cube',
                                thick: 24,
                                height: 220,
                                startDot: {
                                    x: -190,
                                    y: 110,
                                    z: -350
                                },
                                endDot: {
                                    x: -195,
                                    y: 110,
                                    z: -350
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_down: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_fore: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_behind: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_left: {
                                        skinColor: 0xd0eef0,
                                    },
                                    skin_right: {
                                        skinColor: 0xd0eef0,
                                    }
                                },
                            },
                            {
                                show: true,
                                name: 'doorCaseTop',
                                uuid: "",
                                objType: 'cube',
                                thick: 24,
                                height: 5,
                                startDot: {
                                    x: -190,
                                    y: 220,
                                    z: -350
                                },
                                endDot: {
                                    x: -410,
                                    y: 220,
                                    z: -350
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_down: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_fore: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_behind: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_left: {
                                        skinColor: 0xd0eef0,
                                    },
                                    skin_right: {
                                        skinColor: 0xd0eef0,
                                    }
                                },
                            },
                            {
                                show: true,
                                name: 'doorCaseBottom',
                                uuid: "",
                                objType: 'cube',
                                thick: 24,
                                height: 5,
                                startDot: {
                                    x: -190,
                                    y: 5,
                                    z: -350
                                },
                                endDot: {
                                    x: -410,
                                    y: 5,
                                    z: -350
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_down: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_fore: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_behind: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_left: {
                                        skinColor: 0xd0eef0,
                                    },
                                    skin_right: {
                                        skinColor: 0xd0eef0,
                                    }
                                },
                            },
                            {
                                show: true,
                                name: 'doorLeft',
                                uuid: "",
                                objType: 'cube',
                                thick: 4,
                                height: 210,
                                startDot: {
                                    x: -196,
                                    y: 112,
                                    z: -350
                                },
                                endDot: {
                                    x: -300,
                                    y: 112,
                                    z: -350
                                },
                                skin: {
                                    opacity: 0.1,
                                    skin_up: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_down: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_fore: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_behind: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_left: {
                                        skinColor: 0x51443e,
                                        imgurl: "../img/door_left.png",
                                    },
                                    skin_right: {
                                        skinColor: 0x51443e,
                                        imgurl: "../img/door_right.png",
                                    }
                                },
                            },
                            {
                                show: true,
                                name: 'doorRight',
                                uuid: "",
                                objType: 'cube',
                                thick: 4,
                                height: 210,
                                startDot: {
                                    x: -300,
                                    y: 112,
                                    z: -350
                                },
                                endDot: {
                                    x: -404,
                                    y: 112,
                                    z: -350
                                },
                                skin: {
                                    opacity: 0.1,
                                    skin_up: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_down: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_fore: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_behind: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_left: {
                                        skinColor: 0x51443e,
                                        imgurl: "../img/door_right.png",
                                    },
                                    skin_right: {
                                        skinColor: 0x51443e,
                                        imgurl: "../img/door_left.png",
                                    }
                                },
                            }
                        ]
                    },
                    {//wall2
                        uuid: "",
                        name: 'wall2',
                        thick: 20,
                        height: 240,
                        skin: {
                            skin_up: {
                                skinColor: 0xdddddd,
                            },
                            skin_down: {
                                skinColor: 0xdddddd,
                            },
                            skin_fore: {
                                skinColor: 0xb0cee0,
                            },
                            skin_behind: {
                                skinColor: 0xb0cee0,
                            },
                            skin_left: {
                                skinColor: 0xb0cee0,
                            },
                            skin_right: {
                                skinColor: 0xdeeeee,
                            }
                        },
                        startDot: {
                            x: -500,
                            y: 120,
                            z: 450
                        },
                        endDot: {
                            x: 500,
                            y: 120,
                            z: 450
                        },
                    },
                    {//wall3
                        uuid: "",
                        name: 'wall3',
                        thick: 20,
                        height: 240,
                        skin: {
                            skin_up: {
                                skinColor: 0xdddddd,
                            },
                            skin_down: {
                                skinColor: 0xdddddd,
                            },
                            skin_fore: {
                                skinColor: 0xb0cee0,
                            },
                            skin_behind: {
                                skinColor: 0xdeeeee,
                            },
                            skin_left: {
                                skinColor: 0xb0cee0,
                            },
                            skin_right: {
                                skinColor: 0xb0cee0,
                            }
                        },
                        startDot: {
                            x: 490,
                            y: 120,
                            z: -355
                        },
                        endDot: {
                            x: 490,
                            y: 120,
                            z: 455
                        },
                    },
                    {//wall4
                        uuid: "",
                        name: 'wall4',
                        thick: 20,
                        height: 240,
                        skin: {
                            skin_up: {
                                skinColor: 0xdddddd,
                            },
                            skin_down: {
                                skinColor: 0xdddddd,
                            },
                            skin_fore: {
                                skinColor: 0xdeeeee,
                            },
                            skin_behind: {
                                skinColor: 0xb0cee0,
                            },
                            skin_left: {
                                skinColor: 0xb0cee0,
                            },
                            skin_right: {
                                skinColor: 0xb0cee0,
                            }
                        },
                        startDot: {
                            x: -490,
                            y: 120,
                            z: -355
                        },
                        endDot: {
                            x: -490,
                            y: 120,
                            z: 455
                        },
                    }
                ],
                style: {
                    skinColor: 0x8ac9e2
                }

            }/*,
            //玻璃
            {
                show: true,
                name: 'windowGlass1',
                uuid: "",
                objType: 'glasses',
                width: 500,
                height: 160,
                pic: "../img/white.png",
                transparent: true,
                opacity: 1,
                position: { x: 200, y: 130, z: -350 },
                rotation: { x: 0, y: 0 * Math.PI, z: 0 },
                blending: false,
            }*/,
            //贴海报
            {
                show: true,
                name: 'messagePanel',
                uuid: "",
                objType: 'plane',
                width: 100,
                height: 160,
                pic: "../img/post.jpg",
                transparent: true,
                opacity: 1,
                position: { x:150, y: 150, z: 439 },
                rotation: { x: 0, y: Math.PI, z: 0 },
                blending: false,
                repeat: false
            },
            //空调
            {
                show: true,
                uuid: "",
                name: 'aircondition',
                objType: 'cube',
                length: 60,
                width: 80,
                height: 220,
                rotation: [{ direction: 'y', degree: 0.3*Math.PI}],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                x: -420,
                y: 110,
                z: 370,
                style: {
                    skinColor: 0xfefefe,
                    skin: {
                        skin_fore: {
                            imgurl: "../img/timg.jpg",
                        },
                    }
                }
            },
            //电视机
            {
                show: true,
                uuid: "",
                name: 'television',
                objType: 'cube',
                length: 10,
                width: 180,
                height: 120,
                rotation: [{ direction: 'x', degree:0}],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                x: -480,
                y: 150,
                z: 0,
                style: {
                    skinColor: 0x555555,
                    skin: {
                        skin_fore: {
                            imgurl: "../img/tv.jpg",
                        },
                    }
                }
            },
            //机柜1-1 --原型
            {
                show:true,
                name: 'cabinet1_1',
                shellname:'cabinet1_1_shell',
                uuid: '',
                // rotation: [{ direction: 'y', degree: 0.25*Math.PI}],//旋转     uuid:'',
                objType: 'emptyCabinet',
                transparent:true,
                size:{length:66,width:70,height:200, thick:2},
                position: { x:300, y: 105, z: -180 },
                doors: {
                    doorType:'lr',// ud上下门 lr左右门 单门可以缺省
                    doorSize: [1],
                    doorname: ['cabinet1_1_door_01'],
                    skins:[ {
                        skinColor: 0x333333,
                        skin_fore: {
                            imgurl: "../img/rack_door_back.jpg",
                        },
                        skin_behind: {
                            imgurl: "../img/rack_front_door.jpg",
                        }
                    }]
                },
                skin:{
                    skinColor: 0xff0000,
                    skin_up: {
                        skin:{
                            skinColor: 0xff0000,
                            skin_up: { imgurl: "../img/rack_door_back.jpg" },
                            skin_down: { imgurl: "../img/rack_door_back.jpg" },
                            skin_fore: {
                                skinColor: 0xff0000,
                                imgurl: "../img/rack_door_back.jpg"
                            },
                            skin_behind: {
                                skinColor: 0xff0000,
                                imgurl: "../img/rack_door_back.jpg"
                            },
                            skin_left: { imgurl: "../img/rack_door_back.jpg" },
                            skin_right: { imgurl: "../img/rack_door_back.jpg" },
                        }
                    },
                    skin_down: {
                        skin: {
                            skinColor: 0x333333,
                        }
                    },
                    skin_left: {
                        skin: {
                            skinColor: 0x333333,
                        }
                    },
                    skin_right: {
                        skin: {
                            skinColor: 0x333333,
                        }
                    },
                    skin_behind: {
                        skin: {
                            skinColor: 0x333333,
                        }
                    }
                }
            },
            //主机1
            {
                show: true,
                uuid: "",
                name: 'equipment_card_1',
                objType: 'cube',
                length: 60,
                width: 65,
                height: 10,
                x: -100,
                y: 105,
                z: -180,
                style: {
                    skinColor: 0xff0000,
                    skin: {
                        skin_up: {
                            skinColor: 0xff0000,
                            imgurl: "../img/rack_inside.jpg",
                        },
                        skin_down: {
                            skinColor: 0xff0000,
                            imgurl: "../img/rack_inside.jpg",
                        },
                        skin_fore: {
                            skinColor: 0xff0000,
                            imgurl: "../img/rack_inside.jpg",
                        },
                        skin_behind: {
                            skinColor: 0xff0000,
                            imgurl: "../img/server1.jpg",
                        },
                        skin_left: {
                            skinColor: 0xff0000,
                            imgurl: "../img/rack_inside.jpg",
                        },
                        skin_right: {
                            skinColor: 0xff0000,
                            imgurl: "../img/rack_inside.jpg",
                        }
                    }
                }
            },
            //主机2
            {
                show: true,
                uuid: "",
                name: 'equipment_card_2',
                objType: 'cube',
                length: 60,
                width: 65,
                height: 20,
                x: -100,
                y: 120,
                z: -180,
                style: {
                    skinColor: 0x92630b,
                    skin: {
                        skin_up: {
                            skinColor: 0x92630b,
                            imgurl: "../img/rack_inside.jpg",
                        },
                        skin_down: {
                            skinColor: 0x92630b,
                            imgurl: "../img/rack_inside.jpg",
                        },
                        skin_fore: {
                            skinColor: 0x92630b,
                            imgurl: "../img/rack_inside.jpg",
                        },
                        skin_behind: {
                            skinColor: 0x92630b,
                            imgurl: "../img/server2.jpg",
                        },
                        skin_left: {
                            skinColor: 0x92630b,
                            imgurl: "../img/rack_inside.jpg",
                        },
                        skin_right: {
                            skinColor: 0x92630b,
                            imgurl: "../img/rack_inside.jpg",
                        }
                    }
                }
            },
            //主机3
            {
                show: true,
                uuid: "",
                name: 'equipment_card_3',
                objType: 'cube',
                length: 60,
                width: 65,
                height: 30,
                x: -100,
                y: 145,
                z: -180,
                style: {
                    skinColor: 0x92630b,
                    skin: {
                        skin_up: {
                            skinColor: 0x92630b,
                            imgurl: "../img/rack_inside.jpg",
                        },
                        skin_down: {
                            skinColor: 0x92630b,
                            imgurl: "../img/rack_inside.jpg",
                        },
                        skin_fore: {
                            skinColor: 0x92630b,
                            imgurl: "../img/rack_inside.jpg",
                        },
                        skin_behind: {
                            skinColor: 0x92630b,
                            imgurl: "../img/server3.png",
                        },
                        skin_left: {
                            skinColor: 0x92630b,
                            imgurl: "../img/rack_inside.jpg",
                        },
                        skin_right: {
                            skinColor: 0x92630b,
                            imgurl: "../img/rack_inside.jpg",
                        }
                    }
                }
            }
        ],
        events: [],
        btns: []
    }
    drawingstation.initdrawing3D('WebGL-output', initOption, Aobjects);
    drawingstation.start();
}