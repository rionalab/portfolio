import style from './HomepageSectionAbout.module.scss'

export default function HomepageSectionAbout() {
    return (
        <div className={style.sectionAbout}>
            <h3 className={style.sectionTitle}>About</h3>
            <div className={style.content}>
                <div className={style.kiri}>
                    <p>PT Tirta Gracia Abadi adalah perusahaan inovatif yang bergerak dibidang Information & Communication Technology (ICT). Perusahaan ini didirikan pada tanggal 20 Juli 2017. Seiring perkembangannya, perusahaan ini tumbuh untuk memberikan solusi bisnis terpadu dengan layanan dan solusi terbaik serta kompetitif demi keuntungan pelanggan.</p>
                    <p>Kami berkomitmen untuk mendapatkan hasil yang optimal dalam upaya memberikan solusi guna mengurangi beban biaya perusahaan terutama biaya telekomunikasi. Selain itu Solusi yang diberikan juga dapat membantu meningkatkan produktivitas dan efesiensi kinerja suatu perusahaan.</p>
                </div>
                <div className={style.kanan}>
                    <div className="par">
                        <p><b>VISI</b>Menjadi suatu perusahaan yang memberikan solusi bisnis secara terpadu sesuai keinginan pelanggan.</p>
                        <p><b>MISI</b>Memberikan layanan dan solusi terbaik serta kompetitif guna keuntungan pelanggan.</p>
                    </div>
                </div>
            </div>
        </div>
     )
}