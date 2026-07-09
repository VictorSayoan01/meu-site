import streamlit as st
import pandas as pd

st.set_page_config(
    page_title="VK Energia",
    page_icon="⚡",
    layout="wide"
)

st.markdown("""
<style>
.main {
    background-color: #f6f8fb;
}

.card {
    background: white;
    padding: 24px;
    border-radius: 18px;
    box-shadow: 0 8px 25px rgba(10,31,68,0.08);
    border-left: 5px solid #f6c453;
}

.card h3 {
    color: #0A1F44;
    font-size: 16px;
    margin-bottom: 8px;
}

.card strong {
    color: #0A1F44;
    font-size: 28px;
}

.destaque {
    background: linear-gradient(135deg, #0A1F44, #07152f);
    color: white;
}

.destaque h3,
.destaque strong {
    color: white;
}

.destaque span {
    color: #f6c453;
}
</style>
""", unsafe_allow_html=True)

st.sidebar.image("assets/img/logo branca sem fundo.png", width=180)

st.sidebar.markdown("## VK Energia")

menu = st.sidebar.radio(
    "Menu",
    [
        "Dashboard",
        "Unidades Consumidoras",
        "Faturas",
        "Análise Tarifária",
        "Demanda Contratada",
        "Relatórios",
        "Configurações"
    ]
)

st.title("Centro de Inteligência Energética")

st.markdown("""
**Cliente:** Metaltec Industrial  
**Unidade Consumidora:** 6902214603  
**Modalidade Tarifária:** Verde  
**Grupo:** A4
""")

col1, col2, col3, col4 = st.columns(4)

with col1:
    st.markdown("""
    <div class="card">
        <h3>Consumo Mensal</h3>
        <strong>42.580 kWh</strong>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown("""
    <div class="card">
        <h3>Demanda Máxima</h3>
        <strong>96 kW</strong>
    </div>
    """, unsafe_allow_html=True)

with col3:
    st.markdown("""
    <div class="card">
        <h3>Fator de Potência</h3>
        <strong>0,97</strong>
    </div>
    """, unsafe_allow_html=True)

with col4:
    st.markdown("""
    <div class="card destaque">
        <h3>Economia Potencial</h3>
        <strong>R$ 9.050/mês</strong><br>
        <span>R$ 108.600/ano</span>
    </div>
    """, unsafe_allow_html=True)

st.divider()

dados = pd.DataFrame({
    "Mês": [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ],
    "Consumo kWh": [
        38200, 40150, 39580, 42100, 42580, 43800,
        44600, 43200, 41800, 42950, 44020, 42580
    ],
    "Demanda kW": [
        88, 91, 90, 94, 96, 98,
        102, 99, 95, 96, 97, 96
    ],
    "Demanda Contratada kW": [
        100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100
    ]
})

col_g1, col_g2 = st.columns(2)

with col_g1:
    st.subheader("Consumo dos Últimos 12 Meses")
    st.line_chart(
        dados,
        x="Mês",
        y="Consumo kWh",
        use_container_width=True
    )

with col_g2:
    st.subheader("Demanda Registrada x Contratada")
    st.line_chart(
        dados,
        x="Mês",
        y=["Demanda kW", "Demanda Contratada kW"],
        use_container_width=True
    )

st.divider()

col_a, col_o = st.columns(2)

with col_a:
    st.subheader("Alertas Técnicos")
    st.warning("Demanda registrada próxima ao limite contratado.")
    st.info("Fator de potência dentro do limite adequado.")
    st.error("Verificar possível ultrapassagem em julho.")

with col_o:
    st.subheader("Oportunidades Identificadas")
    st.success("Economia potencial de R$ 9.050/mês.")
    st.success("Revisar demanda contratada para otimização.")
    st.success("Analisar enquadramento tarifário atual.")

st.divider()

st.subheader("Histórico de Faturas")

faturas = pd.DataFrame({
    "Mês": ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    "Consumo kWh": [38200, 40150, 39580, 42100, 42580, 43800],
    "Demanda kW": [88, 91, 90, 94, 96, 98],
    "Valor da Fatura": [
        "R$ 36.850,00",
        "R$ 38.420,00",
        "R$ 37.910,00",
        "R$ 40.300,00",
        "R$ 41.250,00",
        "R$ 42.100,00"
    ],
    "Status": [
        "Analisada",
        "Analisada",
        "Analisada",
        "Analisada",
        "Analisada",
        "Pendente"
    ]
})

st.dataframe(faturas, use_container_width=True)

st.divider()

st.subheader("Relatórios Técnicos")

col_r1, col_r2, col_r3 = st.columns(3)

with col_r1:
    st.download_button(
        "Baixar Relatório Tarifário",
        data="Relatório tarifário VK Energia",
        file_name="relatorio_tarifario_vk_energia.pdf"
    )

with col_r2:
    st.download_button(
        "Baixar Diagnóstico Energético",
        data="Diagnóstico energético VK Energia",
        file_name="diagnostico_energetico_vk.pdf"
    )

with col_r3:
    st.download_button(
        "Baixar Histórico de Faturas",
        data=faturas.to_csv(index=False),
        file_name="historico_faturas.csv"
    )