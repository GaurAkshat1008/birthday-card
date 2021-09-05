import React from 'react'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './BirthdayCards.css'

function BirthdayCards() {
     // eslint-disable-next-line
    const [people, setPeople] = useState([
        {
            name: '',
            url: "https://happybirthdaycakepic.com/pic-preview/Mummy%20Love%20U/30/pink-birthday-cake-for-Mummy%20Love%20U.jpg"
        },
        {
            name: '',
            url: "https://lh3.googleusercontent.com/Y5u4ffYU1bn8W-fWzgO9jjFyaI9OJz-R_OIxcPg4bDRlycuYRCb4HGbrits1HhGzrFoZHWJer2jCwiT0e4z0q-p2Q_eyBK6MLq_4BD3qbX0TmHty-htcGVaxx55y_UPM2wHLd9y8wXKNqpf37CEKQj5_eGKVCNh0E62y1hkf6SQ4ysb9NyCPIfebyI9Su1-WFw05PbNfvPucj0Y-QckYXPlehZrowNoQnoSha6n17WsYPWBk1omIN3mZeRDAwknuy8mcMHlPg05a9f7BWE945_tbQwnz1FHJBdIE3jD8fjvOpMKmSAPk_Sb1W-SAhP5DPULsro0JK7fMncqiROuBMoWRv8WNZHmZkArglp1C3qan-ZD8u3I3E9AvQzlS8by33IoH-xRe3XIsrS-ndI2aL65mGb_qARnNlKBMfqCCIOKy_F-2VasiqBsME4JO2Z3Xby9l6kFJbv-Wi9MrQs5tb4p_G78G1gT6wSwyYhNuhcuobjSrGvZ3_1KeBANu95UlWoA_34OFAiOwLR03NtCKIox3dMO4CNQqhdr7nMcM3v6gQNIwy01EVjl7R50LicDJGur4uv4Ty7DuS4MBJqoQBc0NePjAPD7tvVI9PUIL2qeXrUc6dvSEXiS34XJoi8fYlE32KOhioDjFL1f2PVtGRQHSUoQ5NbJa-6p-STXH6RbWqGp2zTGdr0sNIiAzqiwpzLuXcbJUuCb6delImBHPG7jI=w494-h658-no?authuser=3"
        },
        {
            name: '',
            url: "https://lh3.googleusercontent.com/4qQBV9VY16Nuai0JPIpq4kgsqpcA-MGTKtRHBaP7dOIPKKgqzcZ_tCqB1zlg-NrWKJF9ufBeVf1YZSy50C8RwbWdzrZRL6WhGvfBepsjzCcLAqnH7Dg9GTyt3Ryhaa65i48HqaS_s0p9IXdPLHmmajNYjp-kudoSIJHTqGBIwkyv2aJqEkfljlAulRJE8nDYGAVaebSU29d1zZSWNGM4-7aOHbb87YSzDKX6uHRhl7j4yP1JD9RVQm9EkXsxZBsZqdnxJyNtbdXYVE--tJStGF4bZYNscML9oGSqMocf44kHJenDhB5eVe5TMPbI_MimnsrMQ9qBSIijIHw5sMry3T2qHqmqZjIM4PzRqFsV7S2RKU9Rzn36Xdk98pB1Q_T_0bIfVbJE0yQ6PADYaIzUT0eswqs8bpkDTmpVdqcPz--GGVlVLr-VbVagb7_IPrvHnrIpPpeQIXholeERKQ13837pr3PIc0o9BBMgVo9doKcepZq_c4HJavELECHceRX2Ey8JdCmK6G3nLSaEuThae1PA2C8j8QX_8oAomvvugsln2Vp0jX-I0n1nhA7DR-wXk4XcUZO3qNKIEtnnycIyxSLAAVwYEPmdlstl-EGV9QDd34KDDiZ1PmXALJuVasy5Ys-7yRmIEtrShRR8RTt0J_vxY0YBPTpah8Y8ikwB5lUuY-krTgachl9FbJ2FhV2ij-BT_IjV_vdPHiP_SBlQvQ=w703-h453-no?authuser=5"
        },
        {
            name: '',
            url: "https://lh3.googleusercontent.com/4S6LagWl_W-SbXoNaXYs7iX09_6hIx3CZTKMA9eXQvC044mZacujQQQnkEeuJtf2WCvDvXYFZYWlliONO2pVIWrIpPLB6l2Sk4DkYNC0HEtEZCX2pDiwgCjgugllh30yLcpDBJGxMCOLQSAoWezfbrg0LEfz-iXh_6nHbNI3CpnWiQiL-QQqKLaHWDyA4AmbPD1LwXHbkVsg4T_KIVQE7Lc3IVQK7Oh-DBqADblQoFY7BMw7jMisPGjHic70nJ3YlehN4VMlKp1g_lkilgBHn-okAXv63P4_z2na8KNFSA2cHjFlb3HjpsrYuYt7BhovqtSie_VI6x1DmBS1FNgvQ9YuryfcBc9O0jRvAi9DE7t6SdIdcqatOtfBTgUKLUMA5dxdfVcjNO2OngY9Xfnr1HH76H39tlGXqDaCLB9R3QGjHSVqzVcuEp2VFZk9ijHOKSfTVjiLqm23y-xueeExokYiSLWahrAqXnN0eHe5IW-ePsu2uMH_lu13-KUj1Sljs-eQ1MxrWv3SmhFV7xjuuxef-96_kgW7-w8Yq5l6kcmvxtEpfhGmnhooaLYWqty8n1MdGyo4M3smhhf06cfTm38UYac8PwUBI4xwqZWJhKLD7TJzQlY-bYTE6nN6qKUAumb4UHr-2g4vx5qCdF_X_nda5y3zYiefXQm0fSDV92riEuVCEKDEHU428TZHGtN4c4JvWYTJ1Xn6MmJnK8IAVxFX=w494-h658-no?authuser=3"
        },
        {
            name: '',
            url: "https://www.birthdaywishes.expert/wp-content/uploads/2015/01/happy-birthday-mom-social.jpg"
        },
        {
            name: '',
            url: "https://lh3.googleusercontent.com/jeiq3hOyfwHzaSC40YWbtVvMHnQToTdD9UQBA1lFEiwjw4oi9TFtuPdQDiECbnl5LZXLRZZDmf-De2AEJFVG6uiSJ_Ir5hX5vRxktyq2V78knRuhdWdi26-tCcnK134EDeUbiKq14a8Ra4_wZpbh47t6Mlu-CQEaJvZlaYWPAiXCW3mLfxK9pFq1N891Mm75qh6h394Sy-xkPhCroANA7BTZ_s2QoJpm5oz07bI4sAO3NQy2FsXcVrHz-3YZ4BrQ-c7oXK5_kydXr9YPIORkSg-iJFd82ZDvq5e1fAfpooGZpABjK7wHMPgL-u5k_cCZazn2sukqxjmMKJHZgqP4L3K-DY7PnaB-nccs7HzMMlNXQaOrGTufS2LlR5D-sgKInurukN_dYGQQe59pOvZ2_DAAmlvD57VQnYlITl1yzAdbLyIi8G9CbOmAOGc9zDEbrcX4YbOZErgk05IgjCbxfJTUUJx92EA8qxAPqr0J90o2TGmkQZCZ1WVozxuMRTFh4BgJey9KECWuzVVMrH74bwFy4mLw99HJfAhsq5dYCg_1Fw1d3bLMG5zBENFhMKTdkhKnrO_sjy6sVZFGaDQrtZwFVls9LcIPg7_DvIhqyTFngGFgH5XOmi6dP0FXcL3YZnM1IMQf_3ZjLj2nsYPhDir0EPbpXcF2UEfTtxy0-0o59oheIwmJb8jke-8BmWvXNj04mapl_UcNmH21WN6fa0DG=w1006-h566-no?authuser=3"
        },
        {
            name: '',
            url: "https://lh3.googleusercontent.com/Qn9_t74FGNzNE8x--hkMLqkruSMVukpm89DNkPwgg3-IcdjT1lSf1lvYUEISRebBlUXiXwmwzy5Ku-1nerwpTjqdRpL9REQj4cq2RqmCX20j7U_VVyj3EgnNXwgwYOf2hWIPhsGwQw2KEd4dwyzHw_HiWwBpxGc3nLSVEyr1F6cGq9rzN2VCBKYCj51V5OQsJ7n7ENzzIB0ERkVBjjbS2_yDrKXQXFbVWoEOwYfJFlX-ytJrJeRyca2nNKwat85jiWsF7P4RWEub7zY3tQYJtr-sxHvIm3hnEgrBCk7HQRnseYor3ApkiO9sRmd6I1XjROM7RuOW44YCpxh4lCXrRn85NEXiEYf2vrS3UblgkJMjbW0Fb-sl0WAikkkcpjf2ODq1h9jeGjwwlAFk44MaxDZssIEjjT0Isi8OPzpKDFPbQT9oPopnOdGhDUo7OS8QCpvAsnt2CjIazWUXGE_3e78iiU_rj3um1HoAJGPNfDug3PgnNvZhtv1QYwSlFGoxLyyvZodMn1nRwDrUFtSTaxOg1Jnn92xNcKWCs7kfL5JVApuKCwgrvmQ6S4wusp45BWAy-b-xoGl3te3T9cM1Dm1bVjbMHlR6O9uF3tBPO3djBrmmuYsVg7pgywHX7xEf37IkC1MNrpAEUXk75vFzzAY1wFZhoIQSCKaHi7xqMESClrUAkqn4VtGUwb2UyyQP59E30dpN-PBI7kVn6uDfbQ=w743-h454-no?authuser=5"
        },
        {
            name: '',
            url: "https://lh3.googleusercontent.com/YIFQXLCEmkjVb5AS0xAevNoBjuATIMdCqR2RYZJ93PgTHkvMdz5fZ2bncMEOQgOvK6HWwjZIhAY2A0rBq9PD8hOTfp0Tnf3DgmLXw8PSbj_DzH3OjjaR1TZTmu6reMCWvhWRrp-g2CCl24543C8cjweVUWyyy1d7HALev-idKxjfaSE9Y-tUV64uoGPU7-Uhqf9zqzuE5Flo0hho5jnWgk5qA8MP-lhObljqKlwjGGX20Qzz3uu7AL8Aq9IBDr84STLkl5dwnaeiwe4GWkHpOJp20Mq563nV-JL1lt2qm3DJqi0ns1TFUPtNaNXZGnboByiUARb9OEhzBOj3iV9G-wbaDPqU_LtGKkldQjEdAoWiBZGi2LDOaJJWxkXjc8fUWe8bDIVY34tZkmugBrEHJPGfZjO0zj1PPhBq87TPCs4Pk6zNiLPIiBtAYhnimOpKVBCKRHPLnKVL9q_wHkn8WrYJDga2f9CT_guQLuNESZ91GiXxd4OGM_SMrpl3X3aK49SppX3MTKyGjwU5znW3n5QGAbBZIYUUHasJjmx0lPeeYfDgbIBBHRQOZX1fs1wZsFjUC5mKjgQqlc4aXPzHCJAcq2WEb0LMPJuCNo7KkdbMEANrGCmzfR_TVayYrFWg6JwXN_jj_y-4DGg_ukNQKQ_qP70J_W5ZZezV8lSkkN1WMEY-lyALoQyjZbGsRd21CSgFluLm53AIJ2M9T8wnRu5D=w494-h658-no?authuser=3"
        },
        {
            name: '',
            url: "https://lh3.googleusercontent.com/HyBHFQRkChZXGFJAUDpaucI0yayEody6RbdxUwPkh9mkTHRL6JzHAlMBh9vCTPrrJEq6hgKyqzzjM7TFwiVPfu2WrBtweZnF8N0jX62QfYm9Am8f4Id-cegfyrVR6e5ZgMwaK1QP2-anlb8i8ywhzHxTulXIv1ITqaKudMf7uXd7kPg0jvcE8mD7gpEj5vReNB53t-awa5uXxJkIMmFpkxgnYIW6Blufxq7I9OddUjKlqsRrcI8kjJlFEGf6XZsaaS6V_0awLrBD3_kpWK6TgyAbfkaex4xuIeQ-Oi5ew5K9uWNE0uBCPAMORhOn2pI5HWS9BjgR5rMDpAPh9dwOFCtVC5CAY5k2gsGCTyDwfXxp8VCb4W55JqpqjtE2xdMut3LLmG4yb_MsYjaTBs-QA4W4Fzefkg1OtE0aPCQeAW8HXIx60eMVndJvS_r0ojin13J3_rvXSmXSSLosNuZFzwnGstG87Hesm1zqiypFDjzCuDazKxaOx-GIKRi9h3RaWonOdTiDx8evsWUTRQKrRXT2yao1AhIRU2qSWnftxV5nQ9v2GnA2Tfit_cl7d-nXEInoEgavFGt9A-eww8LGybtrZInM9jlfzg-ifmeODaBkhO8xfz-K7pF4TbVExBUHtVOil3nzaGUqfxyri2gl_ku5eHwjXfAtB0ml3XpGAHSNB8b-Sm8VurzJc6ESlZku7WreebK370TYsmiaBKxLYA=w735-h414-no?authuser=5"
        },
        {
            name: '',
            url: "https://lh3.googleusercontent.com/HRi07OQ8DkT8XYbmklv3c5k7JYQwMyND3N8yIk7HVIPG_ezGhPmWzmWpmmT7x51F8470-5_GoeAWJiw0cbJehjbF8luRhEwVqfb7IP8Pn6kz1IVFwO0yzG0Lt5mW5yD7H9_0I_2L8gpLQYkyprKPvB8IjiNi93eFB4FmzGrEF2hEZeamfbg6cyqonhw4rtKSgVH9nGOwOxCqtafFV6K6WneIIo48dpZJB6E5HRVm8k8TYUsL1tW9vaD05pSGQyAayZdUteO5TcSpnuYo7IaETs4aA34oMHcJe-sHESlhCl-tkjXrY272YiFoXA4p-Iv5iPVA0-pghrLcRklgw-GDXJG8uWYXljp5ac0BennHoiNIVVUpp9vHDvixt7pZIKANjQ5Yxqj7bfpcBvoFF93CjaFAYNXY9qdF07e7zMoHS6jue6NwdooXyQ9iWtjJS_4NREmgJJQ4WVpLcGcLL9lPcc3CsuAGhXz-7OqpG3C6BbrE3v9beYEPt3EFG6Ad2_20K3Jedarb4fiWri5jTKRm8B7MEWHvXDNKGt4ugnyx3bqZqVkQmM5WbGCgYRBR8GtKyPpuYNQNoElBOgNbBnjLssB3E99QlWEjMvrGvQ3vqpfV_ocv0ieiubCRr_MckAJIqBzEI2SYvfOcsfwT-Ro1g1h_TEP-wYBvWjraa6mrHnoMvcSIepKa6f3IXbTR6srZdKVsFLgu-bQJ0qEzOEG6a-yB=w878-h658-no?authuser=3"
        }
    ])
    const swiped = (direction, nameToDelete) =>{
        console.log("removing" + nameToDelete);
        // setLastDirection(direction);
    };
    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    };

    return (
        <div className="cards">
            <div className="cards__cardContainer">
            {people.map(person => (
                <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                <div style={{backgroundImage: `url(${person.url})`}} className="card">
                    <h3>{person.name} </h3>
                </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default BirthdayCards
