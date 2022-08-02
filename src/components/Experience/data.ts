type Experience = {
    company: string
    roles: Role[];
}

type Role = {
    title: string;
    start: string;
    end: string;
}

export const experiences: Experience[] = [
    {
        company: 'atama plus Inc.',
        roles: [
            { title: 'Software Engineer', start: '2022/08', end: '' },
        ]
    },
    {
        company: 'VISITS Technologies inc.',
        roles: [
            { title: 'VP of Engineering', start: '2020/10', end: '2022/07' },
            { title: 'Software Engineer', start: '2018/05', end: '2020/10' },
        ]
    },
    {
        company: 'FiNC Technologies inc.',
        roles: [
            { title: 'Technical Lead Manager in iOS', start: '2016/02', end: '2018/05' }
        ]
    }
]