const data = {
    childrenList: [
        {
            childrenList: [
                {
                    childrenList: [],
                    data: {
                        createOfficialOcu: false,
                        createServiceOcu: false,
                        createdAt: 1590053251000,
                        customNumber: '',
                        description: '',
                        domainType: 'executive',
                        id: 484,
                        imageId: 0,
                        name: '抚顺XX',
                        networkId: 479,
                        parentId: 483,
                        serialNumber: '472001001',
                        updatedAt: 1590141730000,
                    },
                    id: '484',
                    parentId: '483',
                },
            ],
            data: {
                createOfficialOcu: false,
                createServiceOcu: false,
                createdAt: 1590053111000,
                customNumber: '',
                description: '',
                domainType: 'executive',
                id: 483,
                imageId: 0,
                name: '抚顺市',
                networkId: 479,
                parentId: 482,
                serialNumber: '472001',
                updatedAt: 1590141721000,
            },
            id: '483',
            parentId: '482',
        },
        {
            childrenList: [
                {
                    childrenList: [],
                    data: {
                        createOfficialOcu: false,
                        createServiceOcu: false,
                        createdAt: 1590053429000,
                        customNumber: '',
                        description: '',
                        domainType: 'executive',
                        id: 486,
                        imageId: 0,
                        name: '鞍山海城',
                        networkId: 479,
                        parentId: 485,
                        serialNumber: '472002001',
                        updatedAt: 1590141737000,
                    },
                    id: '486',
                    parentId: '485',
                },
                {
                    childrenList: [],
                    data: {
                        createOfficialOcu: false,
                        createServiceOcu: false,
                        createdAt: 1590053455000,
                        customNumber: '',
                        description: '',
                        domainType: 'executive',
                        id: 487,
                        imageId: 0,
                        name: '鞍山台安',
                        networkId: 479,
                        parentId: 485,
                        serialNumber: '472002002',
                        updatedAt: 1590141744000,
                    },
                    id: '487',
                    parentId: '485',
                },
                {
                    childrenList: [],
                    data: {
                        createOfficialOcu: false,
                        createServiceOcu: false,
                        createdAt: 1590053475000,
                        customNumber: '',
                        description: '',
                        domainType: 'executive',
                        id: 488,
                        imageId: 0,
                        name: '鞍山城郊',
                        networkId: 479,
                        parentId: 485,
                        serialNumber: '472002003',
                        updatedAt: 1590053475000,
                    },
                    id: '488',
                    parentId: '485',
                },
            ],
            data: {
                createOfficialOcu: false,
                createServiceOcu: false,
                createdAt: 1590053411000,
                customNumber: '',
                description: '',
                domainType: 'executive',
                id: 485,
                imageId: 0,
                name: '鞍山市',
                networkId: 479,
                parentId: 482,
                serialNumber: '472002',
                updatedAt: 1590053411000,
            },
            id: '485',
            parentId: '482',
        },
    ],
    data: {
        createOfficialOcu: true,
        createServiceOcu: true,
        createdAt: 1590051027000,
        customNumber: '',
        description: '',
        domainType: 'executive',
        id: 482,
        imageId: 0,
        name: '辽宁省',
        networkId: 479,
        parentId: 0,
        serialNumber: '472',
        updatedAt: 1590142072000,
    },
    id: '482',
    parentId: '',
};

// function getHowManyLevel(obj) {
//     let res = JSON.stringify(obj).replace(/[^{|^}]/g, '');
//     while (/}{/g.test(res)) {
//         res = res.replace(/}{/g, '');
//     }
//     return res.replace(/}/g, '').length;
// }

// function getHowManyLevel(object) {
//     var level = 1;
//     for(var key in object) {
//         if (!object.hasOwnProperty(key)) continue;

//         if(typeof object[key] == 'object'){
//             var depth = getHowManyLevel(object[key]) + 1;
//             level = Math.max(depth, level);
//         }
//     }
//     return level;
// }


function maxDepth(object) {
    if (typeof object !== "object" || object === null) {
        return 0;
    }

    let values = Object.values(object);

    return (values.length && Math.max(...values.map(value => maxDepth(value)))) + 1;
}
console.log(maxDepth(data))